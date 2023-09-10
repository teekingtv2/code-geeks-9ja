import connect from '@/backend/db/db';
import Admin from '@/backend/models/Admin';
import Post from '@/backend/models/Post';

export default async function handler(req, res) {
  const { title, category, content, img, email } = await req.body;

  // console.log('details', title, category, content, img, email);

  const sanitisedPost = title.replace(
    /[\\\.\,\+\*\?\^\$\@\#\%\^\&\*\-\_\[\]\(\)\{\}\/\'\#\:\!\=\|]/gi,
    ''
  );
  const splittedPost = sanitisedPost.split(' ');
  let slug = splittedPost.join('-');

  try {
    console.log('Try block start');

    console.log('user 1');
    const posts = await Post.findOne({ slug });
    const user = await Admin.findOne({ email });

    if (posts) {
      slug = `${slug}-2`;
    }

    if (!user) {
      res.status(403).json('No admin permission given');
    }

    const username = user.name;
    const userskill = user.skill;

    console.log('details', { title, category, content, img, username, userskill, slug });

    const newPost = new Post({ title, category, content, img, username, userskill, slug });

    await connect();
    await newPost.save();
    res.status(201).json('Post Published');
  } catch (error) {
    res.status(502).json(error);
  }
}
