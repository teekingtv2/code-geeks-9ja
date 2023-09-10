import connect from '@/backend/db/db';
import Applicant from '@/backend/models/Applicant';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connect();
    const selectedApplicant = await Applicant.findById(id);
    if (!selectedApplicant) res.status(401).json('Applicant data does not exist');

    await Applicant.findByIdAndDelete(id);
    res.status(201).json('Applicant successfully deleted');
  } catch (error) {
    console.log(err);
    res.status(501).json(error);
  }
}
