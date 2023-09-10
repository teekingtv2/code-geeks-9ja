import connect from '@/backend/db/db';
import Post from '@/backend/models/Post';

export default async function handler(req, res) {
  const { slug } = req.query;
  try {
    await connect();
    const post = await Post.findOne({ slug });
    res.status(200).json({ post });
  } catch (error) {
    res.status(501).json(error);
  }
}
