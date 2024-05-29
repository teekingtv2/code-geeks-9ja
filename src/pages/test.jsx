import React from 'react';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

const Test = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  const validatePassword = /^[a-zA-Z0-9_@]+$/;
  const validatePhone = /^[\+][0-9]{5,10}$/;
  const validationSchema = yup.object({
    name: yup
      .string()
      .required('Enter your name')
      .max(10, 'must not be more than 10 characters long'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    phone: yup.string().matches(validatePhone, 'Incorreect phone number.'),
    password: yup.string().matches(validatePassword, 'Incorreect password combination.'),
    // password: yup
    //   .string()
    //   .required('Password is missing')
    //   .min(5, 'Password must not be less than 5')
    //   .max(10, 'Password is too long'),
  });

  const handleSubmission = (values) => {
    console.log('Yopur enetered data:', values);
  };

  return (
    <div>
      <div style={{ height: '2000px', width: '100%', background: '#0ff' }}>
        {/* <div style={{ height: '1400px', width: '100%', background: '#212121' }}></div> */}

        {/* A form foir registration */}
        {/* <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmission}
        >
          {({ values, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit} style={{ margin: '50px' }}>
              <input
                type="text"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="span" className="error" />
              <br /> <br />
              <input
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="span" className="error" />
              <br /> <br />
              <input
                type="text"
                name="phone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                placeholder="Enter your phone"
              />
              <ErrorMessage name="phone" component="span" className="error" />
              <br /> <br />
              <input
                type="text"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="span" className="error" />
              <br /> <br />
              <input type="submit" value="Submit form" />
            </form>
          )}
        </Formik> */}

        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? 'animate__hinge animate__animated animate__flip' : ''}
              style={{ height: '300px', width: '50%', background: '#666666' }}
            >
              <h1>some text</h1>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};

export default Test;
