import connect from '@/backend/db/db';
import Admin from '@/backend/models/Admin';

export default async function handler(req, res) {
  try {
    await connect();
    const admins = await Admin.find().sort({ _id: -1 });
    res.status(200).json({ admins });
  } catch (error) {
    res.status(501).json(error);
  }
}
