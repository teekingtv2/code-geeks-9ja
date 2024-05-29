export const registerInitialV = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  return initialValues;
};

export const registerValidate = () => {
  const validationSchema = yup.object({
    name: yup.string().required('Enter your name'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup
      .string()
      .required('Password is missing')
      .min(5, 'Password must not be less than 5')
      .max(10, 'Password is too long'),
  });
  return validationSchema;
};
