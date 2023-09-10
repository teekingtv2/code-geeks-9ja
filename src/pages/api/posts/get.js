import connect from '@/backend/db/db';
import Post from '@/backend/models/Post';

export default async function handler(req, res) {
  try {
    await connect();
    const posts = await Post.find().sort({ _id: -1 });
    res.status(200).json({ posts });
  } catch (error) {
    res.status(501).json(error);
  }
}
