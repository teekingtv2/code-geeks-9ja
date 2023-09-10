import connect from '@/backend/db/db';
import Review from '@/backend/models/Review';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connect();
    const selectedReview = await Review.findById(id);
    if (!selectedReview) res.status(401).json('Applicant data does not exist');

    await Review.findByIdAndDelete(id);
    res.status(201).json('Review successfully deleted');
  } catch (error) {
    console.log(err);
    res.status(501).json(error);
  }
}
