import connect from '@/backend/db/db';
import Applicant from '@/backend/models/Applicant';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connect();
    const selectedApplicant = await Applicant.findById(id);
    if (!selectedApplicant) res.status(401).json('Applicant data does not exist');

    selectedApplicant.status = 'Active';

    await selectedApplicant.save();
    res.status(201).json('Applicant successfully activated');
  } catch (error) {
    console.log(err);
    res.status(501).json(error);
  }
}
