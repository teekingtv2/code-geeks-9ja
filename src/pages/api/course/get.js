import connect from '@/backend/db/db';
import OpenCourse from '@/backend/models/OpenCourse';

export default async function handler(req, res) {
  try {
    await connect();
    const oCourse = await OpenCourse.find();
    res.status(200).json({ oCourse });
  } catch (error) {
    res.status(501).json(error);
  }
}
