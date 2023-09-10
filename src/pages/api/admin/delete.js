import connect from '@/backend/db/db';
import Admin from '@/backend/models/Admin';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connect();
    const selectedAdmin = await Admin.findById(id);
    if (!selectedAdmin) res.status(401).json('Admin does not exist');

    await Admin.findByIdAndDelete(id);
    res.status(201).json('Admin successfully deleted');
  } catch (error) {
    console.log(err);
    res.status(501).json(error);
  }
}
