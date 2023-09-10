import React from 'react';
import { Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ReviewCardPublic = ({ reviews, limit }) => {
  const starRating = (rating) => {
    let arr = [];
    for (let i = 1; i <= rating; i++) {
      arr.push('star');
    }
    return arr.map((rate, i) => (
      <div key={i}>
        <FaStar color="#E2FF7E" size={20} />
      </div>
    ));
  };

  return (
    <>
      {reviews
        ?.slice(0, limit)
        ?.sort((a, b) => a._id - b._id)
        ?.map((rev) => (
          <Col md={4} className="mb-3 text-center px-3 px-md-3" key={rev._id}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? 'animate__animated animate__zoomIn animate__slower' : ''}
                >
                  <div
                    className="bg-transparent h-100 px-3 py-4 text-white"
                    style={{
                      border: '1px solid #e08cf9',
                      borderRadius: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      className="card-title mb-3"
                      style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}
                    >
                      {starRating(rev.rating)}
                    </div>
                    <p className="fs-small footer-text-color">{rev.review}</p>
                    <p
                      className="mx-auto mt-2 p-3 text-white fw-bold"
                      style={{
                        borderRadius: '10px',
                        borderBottom: '1px solid #e08cf9',
                        fontSize: '17px',
                      }}
                    >
                      {rev.name}
                    </p>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        ))}
    </>
  );
};

export default ReviewCardPublic;
