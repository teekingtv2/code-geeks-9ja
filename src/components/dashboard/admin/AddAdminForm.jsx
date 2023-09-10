import { addAdmin } from '@/backend/api';
import { ErrorMessage, Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addAdminValues } from '@/utils/initialValues';
import { validateAddAdmin } from '@/utils/validateValues';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAdminForm = () => {
  const router = useRouter();
  const initialValues = addAdminValues();
  const validationSchema = validateAddAdmin();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = async (values) => {
    console.log('Values: ', values);
    const res = await addAdmin(values);
    console.log(res);
    if (res.status === 201) {
      successNotification(res.data);
      setTimeout(() => {
        router.push('/dashboard/admins');
      }, 2000);
      errorNotification(res.error);
    } else {
      console.log(res.error);
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
      <div className="h-50 pb-5 ">
        <Col xs={12} md={10} className="mb-5 py-5 rounded rounded-3 text-start">
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ values, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Row className="mb-md-1">
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Admin name</div>
                    <input
                      type="text"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="name" component="span" className="error" />
                  </Col>
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Admin email</div>
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
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Role</div>
                    <select
                      name="role"
                      className="contact-input py-1 py-md-2"
                      value={values.role}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="">Select Role</option>
                      <option value="Super Admin">Super Admin</option>
                      <option value="Content Creator">Content Creator</option>
                    </select>
                    <ErrorMessage name="role" component="span" className="error" />
                  </Col>
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Professional Skill</div>
                    <select
                      name="skill"
                      className="contact-input py-1 py-md-2"
                      value={values.skill}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="">Select Skill</option>
                      <option value="Fullstack Geek">Fullstack Geek</option>
                      <option value="Web Frontend Geek">Web Frontend Geek</option>
                      <option value="Web Backend Geek">Web Backend Geek</option>
                      <option value="Mobile Frontend Geek">Mobile Frontend Geek</option>
                      <option value="Mobile Backend Geek">Mobile Backend Geek</option>
                    </select>
                    <ErrorMessage name="category" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Admin Password</div>
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
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Confirm Password</div>
                    <input
                      type="text"
                      name="confirmPassword"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.confirmPassword}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="confirmPassword" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={6}>
                    <button
                      className="btnn4 rounded-2 fs-normal fw-bold dark-shadow-sm "
                      type="submit"
                    >
                      Add Admin
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

export default AddAdminForm;
