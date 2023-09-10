export const studentRegisterValues = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    course: '',
    class: '',
    trainingMedium: 'Virtual',
    connection: '',
    comment: '',
  };
  return initialValues;
};

export const addAdminValues = () => {
  const initialValues = {
    name: '',
    email: '',
    role: '',
    skill: '',
    password: '',
    confirmPassword: '',
  };
  return initialValues;
};

export const adminLoginValues = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  return initialValues;
};

export const addPostValues = () => {
  const initialValues = {
    title: '',
    category: '',
    img: '',
    content: '',
  };
  return initialValues;
};

export const addReviewValues = () => {
  const initialValues = {
    name: '',
    review: '',
    rating: '',
  };
  return initialValues;
};

export const openCourseValues = () => {
  const initialValues = {
    expiry: '',
    course: '',
    curriculum: '',
    // manual: '',
  };
  return initialValues;
};

export const editOpenCourseValues = (course, expiry, curriculum) => {
  const initialValues = {
    expiry: expiry,
    course: course,
    curriculum: curriculum,
  };
  return initialValues;
};

// export const editOpenCourseValues = (oCourse) => {
//   const initialValues = oCourse
//     ? {
//         expiry: oCourse.expiry,
//         course: oCourse.course,
//         curriculum: oCourse.curriculum,
//       }
//     : {
//         expiry: '',
//         course: '',
//         curriculum: '',
//       };
//   return initialValues;
// };
