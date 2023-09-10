import { addPost } from '@/backend/api';
import { ErrorMessage, Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addPostValues } from '@/utils/initialValues';
import { validateAddPost } from '@/utils/validateValues';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

const AddPostForm = () => {
  const router = useRouter();
  const session = useSession();
  const initialValues = addPostValues();
  const validationSchema = validateAddPost();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const email = session?.data?.user?.email;

  const handleSubmit = async (values) => {
    const vals = { ...values, email };
    console.log('Values: ', vals);
    const res = await addPost(vals);
    console.log(res);
    if (res.status === 201) {
      successNotification(res.data);
      setTimeout(() => {
        router.push('/dashboard/posts');
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
                    <div className="text-white fs-small mb-1">Post Title</div>
                    <input
                      type="text"
                      name="title"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.title}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="name" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Category</div>
                    <select
                      name="category"
                      className="contact-input py-1 py-md-2"
                      value={values.category}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="">Select Category</option>
                      <option value="Blog Posts">Blog Posts</option>
                      <option value="Tech News">Tech News</option>
                      <option value="Tech Careers">Tech Careers</option>
                    </select>
                    <ErrorMessage name="category" component="span" className="error" />
                  </Col>
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Post Featured Image</div>
                    <input
                      type="text"
                      name="img"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.img}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="img" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Content</div>
                    <textarea
                      type="text"
                      name="content"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.content}
                      className="contact-input py-1 py-md-2"
                      rows={15}
                    />
                    <ErrorMessage name="content" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={6} className="mx-auto">
                    <button
                      className="btnn4 rounded-2 fs-normal fw-bold dark-shadow-sm "
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

export default AddPostForm;
