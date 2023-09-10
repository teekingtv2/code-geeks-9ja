import connect from '@/backend/db/db';
import OpenCourse from '@/backend/models/OpenCourse';

export default async function handler(req, res) {
  const body = await req.body;

  try {
    const openCourse = new OpenCourse(body);
    await connect();
    await openCourse.save();
    res.status(201).json('Open Course expiry date successfully added.');
  } catch (error) {
    res.status(501).json(error);
  }
}
