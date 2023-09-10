import connect from '@/backend/db/db';
import OpenCourse from '@/backend/models/OpenCourse';

export default async function handler(req, res) {
  const { id } = req.query;
  const body = await req.body;

  try {
    await connect();
    const oCourse = await OpenCourse.findById(id);
    if (!oCourse) res.status(401).json('Open Course data does not exist');

    oCourse.expiry = body.expiry;
    oCourse.course = body.course;
    oCourse.curriculum = body.curriculum;

    await oCourse.save();
    res.status(201).json('Open Course expiry date successfully updated.');
  } catch (error) {
    res.status(501).json(error);
  }
}
