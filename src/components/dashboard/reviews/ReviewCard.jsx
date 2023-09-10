import { deleteReview, fetchReviews } from '@/backend/api';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewCard = () => {
  const { reviews_sorted, reviewsLoading, reviewsError, mutateReviews } = fetchReviews();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleDelete = async (id) => {
    const res = await deleteReview(id);
    console.log(res);
    if (res.status === 201) {
      successNotification(res.data);
      setTimeout(() => {
        mutateReviews();
      }, 1300);
    } else {
      errorNotification(res.error);
    }
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
      {reviews_sorted && (
        <div className="pb-4 pt-2">
          <div
            className="pb-4 pt-2 my-2"
            style={{
              borderBottom: '1px solid #e08cf9',
              borderTop: '1px solid #e08cf9',
              borderRadius: '10px',
            }}
          >
            <table id="tbl_exporttable_to_">
              <thead>
                <tr>
                  <th className="px-3">S/No</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Review</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews_sorted.map((rev) => (
                  <tr className="dataCard" key={rev._id}>
                    <td className="px-3">{reviews_sorted.indexOf(rev) + 1}</td>
                    <td>{rev.name}</td>
                    <td>{rev.rating}</td>
                    <td
                      style={{
                        maxWidth: '50px !important',
                        overflow: 'hidden !important',
                        textOverflow: 'ellipsis !important',
                        whiteSpace: 'nowrap !important',
                      }}
                    >
                      {rev.review}
                    </td>
                    <td>
                      <div
                        onClick={() => handleDelete(rev._id)}
                        style={{ color: 'red', cursor: 'pointer' }}
                      >
                        <FaTrash />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {reviewsLoading && <div>Loading...</div>}
      {reviewsError && <div>{reviewsError}</div>}
    </div>
  );
};

export default ReviewCard;
