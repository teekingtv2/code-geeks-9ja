import { registerApplicant } from '@/backend/api';
import { studentRegisterValues } from '@/utils/initialValues';
import { validateStudentRegister } from '@/utils/validateValues';
import { ErrorMessage, Formik } from 'formik';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegsiterForm = () => {
  const router = useRouter();
  const initialValues = studentRegisterValues();
  const validationSchema = validateStudentRegister();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = async (values, { resetForm }) => {
    const res = await registerApplicant(values);
    if (res.status === 201) {
      successNotification(res.data);
      resetForm();
      setTimeout(() => {
        router.push('/');
      }, 6000);
    } else {
      errorNotification(res.data);
    }
  };

  return (
    <section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
            {({ values, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Row className="mb-md-1">
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Full name</div>
                    <input
                      type="text"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      className="contact-input py-2"
                    />
                    <ErrorMessage name="name" component="span" className="error" />
                  </Col>

                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Email address</div>
                    <input
                      type="text"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      className="contact-input py-2"
                    />
                    <ErrorMessage name="email" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Phone Number</div>
                    <input
                      type="text"
                      name="phone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone}
                      className="contact-input py-2"
                    />
                    <ErrorMessage name="phone" component="span" className="error" />
                  </Col>

                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Course</div>
                    <select
                      name="course"
                      className="contact-input py-2"
                      value={values.course}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="">Select Course</option>
                      <option value="Fullstack Web">Fullstack Web</option>
                      <option value="Frontend Web">Frontend Web</option>
                      <option value="Backend Dev">Backend For Multipurpose Use</option>
                      <option value="Fullstack Mobile">Fullstack Mobile</option>
                      <option value="Data Analysis, Visualisation & Mining">
                        Data Analysis, Visualisation & Mining
                      </option>
                    </select>
                    <ErrorMessage name="course" component="span" className="error" />
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Training Medium</div>
                    <input
                      type="text"
                      name="trainingMedium"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.trainingMedium}
                      className="contact-input py-2"
                      disabled
                    />
                    <ErrorMessage name="trainingMedium" component="span" className="error" />
                  </Col>
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Preferred Class</div>
                    <select
                      name="class"
                      id=""
                      className="contact-input py-2"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.class}
                    >
                      <option value="">Select Class Period</option>
                      <option value="Weekends">Weekends</option>
                      <option value="Weekdays">Weekdays</option>
                    </select>
                    <ErrorMessage name="class" component="span" className="error" />
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">How did you hear about us?</div>
                    <select
                      name="connection"
                      id=""
                      className="contact-input py-2"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.connection}
                    >
                      <option value="">Select</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Internet/Google search">Internet/Google search</option>
                      <option value="Through a friend">Through a friend</option>
                      <option value="Recommendation">Recommendation</option>
                    </select>
                    <ErrorMessage name="connection" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Leave a comment (optional)</div>
                    <textarea
                      type="text"
                      name="comment"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.comment}
                      className="contact-input py-2"
                      rows={5}
                    />
                    <ErrorMessage name="comment" component="span" className="error" />
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

export default RegsiterForm;
