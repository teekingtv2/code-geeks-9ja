import { adminLoginValues } from '@/utils/initialValues';
import { validateAdminLogin } from '@/utils/validateValues';
import { ErrorMessage, Formik } from 'formik';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn, useSession } from 'next-auth/react';

const AdminLoginForm = () => {
  const router = useRouter();
  const initialValues = adminLoginValues();
  const validationSchema = validateAdminLogin();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = async (values, { resetForm }) => {
    console.log('Valeues: ', values);
    const res = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
    });
    if (res.status === 201) {
      successNotification(res.data);
      resetForm();
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } else {
      errorNotification(res.error);
    }
  };

  return (
    <section>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="h-50 pb-5 px-3 px-md-5 ">
        <Col
          xs={12}
          md={8}
          lg={7}
          xl={6}
          className="mx-auto mt-3 mb-5 px-4 px-md-5 py-5 form-container rounded rounded-3"
        >
          <div>
            <div className="text-light fs-large mb-3 fw-bold">Fill in the details below</div>
          </div>

          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Row className="mb-md-1">
                  <Col xs={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Email address</div>
                    <input
                      type="text"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="email" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Password</div>
                    <input
                      type="text"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="password" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={6} className="mx-auto">
                    <button
                      className="btnn4 rounded-2 fs-normal fw-bold mb-2 dark-shadow-sm "
                      type="submit"
                    >
                      Submit
                    </button>
                  </Col>
                </Row>
              </form>
            )}
          </Formik>
        </Col>
      </div>
    </section>
  );
};

export default AdminLoginForm;
