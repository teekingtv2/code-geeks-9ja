import { fetchReviews } from '@/backend/api';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import ReviewCardPublic from '../reviews/ReviewCardPublic';
import DotLoader from 'react-spinners/DotLoader';

const Review = () => {
  const { reviews, reviewsLoading, reviewsError, mutateReviews } = fetchReviews();

  return (
    <>
      <section style={{ height: '24rem' }} className="review-bg position-relative student-review">
        <div className="bx-container">
          <div className="review-card rounded-4 position-absolute top-0 start-50 translate-middle">
            <Row className="rounded-3">
              <Col md={5}>
                <Row>
                  <Col>
                    <img
                      src="/assets/web-image-2.jpg"
                      alt="Code Geeks 9ja"
                      width="270"
                      height="370"
                      className="img-fluid rounded-4 rounded-md-5"
                    />
                  </Col>
                  <Col>
                    <img
                      src="/assets/web-image.jpg"
                      alt="Code Geeks 9ja"
                      width="270"
                      height="370"
                      className="img-fluid rounded-4"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={7} className="text-white p-sm-5 my-5">
                <div
                  className="card-border rounded-3 p-2 mx-auto mx-md-0 text-center"
                  style={{ width: '12rem', height: 'auto' }}
                >
                  <h4 className="text-white fw-bold fs-small ">WHY CHOOSE US</h4>
                </div>

                <Col>
                  <Row>
                    <Col md={6}>
                      <div style={{ borderBottom: '1px solid #e08cf9' }} className="mx-1 rounded-3">
                        <div
                          className=" mt-5 mt-md-5 mb-1"
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                          }}
                        >
                          <div className="me-2">
                            <img src="/assets/icons/training-icon1.png" alt="Code Geeks 9ja" />
                          </div>
                          <h6>More Than Just Trainings</h6>
                        </div>
                        <p className="fs-small footer-text-color">
                          Access proper mentorship and guidance from some of the best and
                          experienced hands in the business.
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div style={{ borderBottom: '1px solid #e08cf9' }} className="mx-1 rounded-3">
                        <div
                          className=" mt-5 mt-md-5 mb-1"
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                          }}
                        >
                          <div className="me-2">
                            <img src="/assets/icons/expertise.png" alt="Code Geeks 9ja" />
                          </div>
                          <h6>Personalised Experience</h6>
                        </div>
                        <p className="fs-small footer-text-color">
                          Trainings are stuctured in away that gives you that sort after personified
                          experience
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div style={{ borderBottom: '1px solid #e08cf9' }} className="mx-1 rounded-3">
                        <div
                          className=" mt-5 mt-md-5 mb-1"
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                          }}
                        >
                          <div className="me-2">
                            <img src="/assets/icons/reliability.png" alt="Code Geeks 9ja" />
                          </div>
                          <h6>Highly Experienced Trainers</h6>
                        </div>
                        <p className="fs-small footer-text-color">
                          Access proper mentorship and guidance from some of the best and
                          experienced hands in the business.
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div style={{ borderBottom: '1px solid #e08cf9' }} className="mx-1 rounded-3">
                        <div
                          className=" mt-5 mt-md-5 mb-1"
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                          }}
                        >
                          <div className="me-2">
                            <img src="/assets/icons/mentorship.png" alt="Code Geeks 9ja" />
                          </div>
                          <h6>Full Career Mentorship</h6>
                        </div>
                        <p className="fs-small footer-text-color">
                          In addition to well structured class sessions, we become full career
                          mentor
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <div className="mt-3">
                  <Link href="/about" className="fs-normal text-color fw-bold">
                    Read more...
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className=" review-bg py-5 ">
        <div className="bx-container mt-5 ">
          <Row className=" mb-5 px-md-4 ">
            <div className="text-center mt-md-0 mt-5">
              <div className="my-4"></div>
            </div>

            {reviews && (
              <>
                <div className="pt-5 pt-md-0 text-white text-center">
                  <h5 className="fs-normal fw-bold mt-5">STUDENT REVIEWS</h5>
                  <h6 className="fs-normal fw-bold mb-5 mt-4">
                    4.5 out of 5 | {reviews.length} reviews
                  </h6>
                </div>

                <ReviewCardPublic reviews={reviews} limit={3} />

                <div className="text-center text-white">
                  <a href="/reviews" className="fs-normal mt-2 ">
                    SEE MORE <BsArrowRight />
                  </a>
                </div>
              </>
            )}
            {reviewsLoading && (
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
            {reviewsError && <div>{reviewsError}</div>}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Review;
