import connect from '@/backend/db/db';
import OpenCourse from '@/backend/models/OpenCourse';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connect();
    const oCourse = await OpenCourse.findById(id);
    if (!oCourse) res.status(401).json('Open course data does not exist');

    oCourse.featured = false;

    await oCourse.save();
    res.status(201).json('Course successfully unfeatured');
  } catch (error) {
    console.log(err);
    res.status(501).json(error);
  }
}
