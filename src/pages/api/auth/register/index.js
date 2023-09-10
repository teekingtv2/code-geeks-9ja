import connect from '@/backend/db/db';
import Admin from '@/backend/models/Admin';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  const { name, email, password, skill, role } = await req.body;
  let existingUser;
  const refinedEmail = email.toLowerCase();

  try {
    await connect();
    existingUser = await Admin.findOne({ email: refinedEmail });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    res.status(402).json('Email already exists');
  }

  const hashedpassword = await bcrypt.hash(password, 5);

  const newAdmin = new Admin({
    name,
    email: refinedEmail,
    skill,
    role,
    password: hashedpassword,
  });
  try {
    await newAdmin.save();
    res.status(201).json('Admin successfully added');
  } catch (error) {
    res.status(501).json(error);
  }
}
