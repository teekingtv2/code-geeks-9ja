import connect from '@/backend/db/db';
import Applicant from '@/backend/models/Applicant';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    await connect();
    const applicant = await Applicant.findById(id);
    res.status(200).json({ applicant });
  } catch (error) {
    res.status(501).json(error);
  }
}
