import connect from '@/backend/db/db';
import Applicant from '@/backend/models/Applicant';
import sendEmail from '@/backend/services/sendEmail';
import { registerTemp } from '@/backend/services/templates/applicants/register.template';

export default async function handler(req, res) {
  const body = await req.body;
  const fName = body.name.split(' ')[0];
  const course = body.course;
  const period = body.class;
  let tools;
  let manualUrl;

  if (body.course === 'Fullstack Web') {
    tools =
      'HTML, CSS, JavaScript, ReactJS, NextJS, Bootstrap, Tailwind, NodeJS, MongoDB, MySQL, Git, Postman';
    manualUrl = 'https://shorturl.at/adCL3';
  } else if (body.course === 'Frontend Web') {
    tools = 'HTML, CSS, JavaScript, ReactJS, NextJS, Bootstrap, Tailwind, Git, Postman';
    manualUrl = 'https://shorturl.at/adCL3';
  } else if (body.course === 'Backend Web') {
    tools =
      'HTML, CSS, JavaScript, TypeScript, ReactJS, NodeJS, MongoDB, MySQL, Nodemailer, Git, Postman';
    manualUrl = 'https://shorturl.at/adCL3';
  } else if (body.course === 'Fullstack Mobile') {
    tools = 'JavaScript/Dart, React Native/Flutter, NodeJS, MongoDB, Git, Postman';
    manualUrl = 'https://shorturl.at/adCL3';
  } else if (body.course === 'Frontend Mobile (React Native)') {
    tools = 'JavaScript, React Native, Git, Postman';
    manualUrl = 'https://shorturl.at/adCL3';
  } else if (body.course === 'Frontend Mobile (Flutter)') {
    tools = 'Dart, Flutter, Git, Postman';
    manualUrl = 'https://shorturl.at/adCL3';
  }

  try {
    const newApplicant = new Applicant(body);
    await connect();
    await newApplicant.save();

    const send_to = `${body.name} <${body.email}>`;
    const reply_to = process.env.CONTACT_EMAIL;
    const send_from = `${process.env.APP_NAME} - <${process.env.APP_EMAIL}>`;
    const subject = 'Successfully Registered - Code Geeks 9ja';

    const email_body = registerTemp(fName, course, tools, period, manualUrl);

    const sendmail = sendEmail(subject, email_body, send_to, send_from, reply_to);

    if (sendmail) {
      console.log('Email sent');
    } else {
      console.log('Email not sent');
    }

    res
      .status(201)
      .json('Registration successfully completed. Please check your email for next step.');
  } catch (error) {
    res.status(501).json(error);
  }
}
