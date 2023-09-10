import { deleteCourse, featureCourse, fetchCourses, unfeatureCourse } from '@/backend/api';
import { useRouter } from 'next/router';
import React from 'react';
import { FaPen } from 'react-icons/fa';
import DotLoader from 'react-spinners/DotLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OpenCourseCard = () => {
  const { oCourse, oCourseLoading, oCourseError, mutateOCourse } = fetchCourses();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);
  const router = useRouter();

  const handleDelete = async (id) => {
    const res = await deleteCourse(id);
    console.log(res);
    if (res.status === 201) {
      errorNotification(res.data);
      mutateOCourse();
    } else {
      errorNotification(res.error);
    }
  };

  const handleFeatureCourse = async (id) => {
    const res = await featureCourse(id);
    console.log(res);
    if (res.status === 201) {
      successNotification(res.data);
      mutateOCourse();
    } else {
      errorNotification(res.error);
    }
  };

  const handleUnfeatureCourse = async (id) => {
    const res = await unfeatureCourse(id);
    console.log(res);
    if (res.status === 201) {
      successNotification(res.data);
      mutateOCourse();
    } else {
      errorNotification(res.error);
    }
  };

  const handleEdit = async (id) => {
    router.push(`/dashboard/courses/${id}`);
  };

  return (
    <div className="mb-3">
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
      {oCourse &&
        oCourse.map((course) => (
          <div className="postCard mb-3" key={course._id}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignSelf: 'flex-end',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'start',
                }}
              >
                <div className="fw-bold py-0" style={{ color: '#ccc', fontSize: '13px' }}>
                  {course.course}
                </div>
                <div className="py-0" style={{ color: '#9c9c9c', fontSize: '13px' }}>
                  {course.featured ? 'Featured' : 'Not Featured'}
                </div>
              </div>
              <div className="fw-bold py-2" style={{ color: '#ccc', fontSize: '13px' }}>
                {course.expiry}
              </div>
              <div
                style={{
                  cursor: 'pointer',
                  color: 'red',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignSelf: 'flex-end',
                  gap: '30px',
                }}
              >
                <div
                  style={{
                    cursor: 'pointer',
                    color: '#fff',
                    background: '#0b4f05',
                    padding: '1px 8px',
                    borderRadius: '20px',
                    fontSize: '13px',
                  }}
                  onClick={() => handleFeatureCourse(course._id)}
                >
                  Feature
                </div>
                <div
                  style={{
                    cursor: 'pointer',
                    color: '#fff',
                    background: '#5e0808',
                    padding: '1px 8px',
                    borderRadius: '20px',
                    fontSize: '13px',
                  }}
                  onClick={() => handleUnfeatureCourse(course._id)}
                >
                  Unfeature
                </div>
                <div
                  style={{
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: 'blue',
                  }}
                  onClick={() => handleEdit(course._id)}
                >
                  <FaPen />
                </div>
                <div
                  style={{
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: 'red',
                  }}
                  onClick={() => handleDelete(course._id)}
                >
                  X
                </div>
              </div>
            </div>
          </div>
        ))}
      {oCourseLoading && (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DotLoader
            color="#b700ee"
            loading={true}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {oCourseError && <div>{oCourseError}</div>}
    </div>
  );
};

export default OpenCourseCard;
