import connect from '@/backend/db/db';
import Review from '@/backend/models/Review';

export default async function handler(req, res) {
  const body = await req.body;

  try {
    const newReview = new Review(body);
    await connect();
    await newReview.save();
    res.status(201).json('Review successfully added.');
  } catch (error) {
    res.status(501).json(error);
  }
}
