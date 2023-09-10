import connect from '@/backend/db/db';
import Review from '@/backend/models/Review';

export default async function handler(req, res) {
  try {
    await connect();
    const reviews = await Review.find();
    const reviews_sorted = await Review.find().sort({ _id: -1 });
    res.status(200).json({ reviews, reviews_sorted });
  } catch (error) {
    res.status(501).json(error);
  }
}
