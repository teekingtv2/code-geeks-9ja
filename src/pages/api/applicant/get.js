import connect from '@/backend/db/db';
import Applicant from '@/backend/models/Applicant';

export default async function handler(req, res) {
  try {
    await connect();
    const applicants = await Applicant.find().sort({ _id: -1 });
    res.status(200).json({ applicants });
  } catch (error) {
    res.status(501).json(error);
  }
}
