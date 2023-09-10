import connect from '@/backend/db/db';
import Post from '@/backend/models/Post';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connect();
    const selectedPost = await Post.findById(id);
    if (!selectedPost) res.status(401).json('Post does nt exist');

    await Post.findByIdAndDelete(id);
    res.status(201).json('Post successfully deleted');
  } catch (error) {
    console.log(err);
    res.status(501).json(error);
  }
}
