import connect from '@/backend/db/db';
import OpenCourse from '@/backend/models/OpenCourse';
import Review from '@/backend/models/Review';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connect();
    const oCourse = await OpenCourse.findById(id);
    if (!oCourse) res.status(401).json('Open Course data does not exist');

    await OpenCourse.findByIdAndDelete(id);
    res.status(201).json('Course successfully deleted');
  } catch (error) {
    console.log(err);
    res.status(501).json(error);
  }
}
