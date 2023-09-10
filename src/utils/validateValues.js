import * as yup from 'yup';

export const validateStudentRegister = () => {
  const validationSchema = yup.object({
    name: yup
      .string()
      .required('Name is required')
      .max(30, 'Maximum characters exceeded')
      .min(5, 'Must not be less than 5'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    phone: yup.string().required('Phone number is required'),
    class: yup.string().required('Select your preferred class period please'),
    course: yup.string().required('What course are you going for?'),
    connection: yup.string().required('How did you hear about us?'),
  });
  return validationSchema;
};

export const validateAddAdmin = () => {
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email supplied'),
    role: yup.string().required('Admin Role is required'),
    skill: yup.string().required('Skill is required'),
    password: yup.string().required('Account Password is required').min(8),
    confirmPassword: yup
      .string()
      .required('Confirm Account Password')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
  return validationSchema;
};

export const validateAdminLogin = () => {
  const validationSchema = yup.object({
    email: yup.string().required('Email is required').email('Invalid email supplied'),
    password: yup.string().required('Account Password is required').min(8),
  });
  return validationSchema;
};

export const validateAddPost = () => {
  const validationSchema = yup.object({
    title: yup.string().required('Post Title is required'),
    category: yup.string().required('Post Category is required'),
    img: yup.string().required('Post Image is required'),
    content: yup.string().required('Post content is required'),
  });
  return validationSchema;
};

export const validateAddReview = () => {
  const validationSchema = yup.object({
    name: yup.string().required('Reviewer name is required'),
    review: yup.string().required('Review content is required'),
    rating: yup.string().required('Rating is required'),
  });
  return validationSchema;
};

export const validateOpenCourse = () => {
  const validationSchema = yup.object({
    course: yup.string().required('Provide course title'),
    expiry: yup.string().required('Provide registration expiry date'),
    curriculum: yup.string().required('Provide course curriculum'),
  });
  return validationSchema;
};
