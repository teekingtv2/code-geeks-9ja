import { updateCourse } from '@/backend/api';
import { ErrorMessage, Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { editOpenCourseValues } from '@/utils/initialValues';
import { validateOpenCourse } from '@/utils/validateValues';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditOpenCourseForm = ({ id, oCourse }) => {
  const router = useRouter();
  const course = oCourse.course;
  const expiry = oCourse.expiry;
  const curriculum = oCourse.curriculum;
  const initialValues = editOpenCourseValues(course, expiry, curriculum);

  const validationSchema = validateOpenCourse();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = async (values) => {
    const res = await updateCourse(id, values);
    console.log(res);
    if (res.status === 201) {
      successNotification(res.data);
      setTimeout(() => {
        router.push('/dashboard/courses');
      }, 1500);
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
      <div className="h-50 pb-5 ">
        <Col xs={12} md={10} className="mb-5 py-3 rounded rounded-3 text-start">
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Row className="mb-md-1">
                  <Col xs={12} md={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Course Title</div>
                    <input
                      type="text"
                      name="course"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.course}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="course" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} md={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Registration Expiry Date</div>
                    <input
                      type="text"
                      name="expiry"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.expiry}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="expiry" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} md={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Languages and Tools</div>
                    <input
                      type="text"
                      name="curriculum"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.curriculum}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="curriculum" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12} className="mx-auto">
                    <button
                      className="btnn4 rounded-2 fs-normal fw-bold dark-shadow-sm "
                      type="submit"
                    >
                      Submit Course Expiry Data
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

export default EditOpenCourseForm;
