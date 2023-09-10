import { addReview } from '@/backend/api';
import { ErrorMessage, Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addReviewValues } from '@/utils/initialValues';
import { validateAddReview } from '@/utils/validateValues';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReviewForm = () => {
  const router = useRouter();
  const initialValues = addReviewValues();
  const validationSchema = validateAddReview();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = async (values) => {
    const res = await addReview(values);
    console.log(res);
    if (res.status === 201) {
      successNotification(res.data);
      setTimeout(() => {
        router.push('/dashboard/reviews');
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
                    <div className="text-white fs-small mb-1">Reviewer Name</div>
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
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} md={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Rating</div>
                    <input
                      type="text"
                      name="rating"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.rating}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="rating" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Review Content</div>
                    <textarea
                      type="text"
                      name="review"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.review}
                      className="contact-input py-1 py-md-2"
                      rows={5}
                    />

                    <ErrorMessage name="review" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={12} className="mx-auto">
                    <button
                      className="btnn4 rounded-2 fs-normal fw-bold dark-shadow-sm "
                      type="submit"
                    >
                      Submit Review
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

export default AddReviewForm;
