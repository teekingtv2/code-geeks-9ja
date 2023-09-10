import { Col, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { Navbar } from '@/components/common';
import ReviewCardPublic from '@/components/reviews/ReviewCardPublic';
import { fetchReviews } from '@/backend/api';
import Head from 'next/head';
import DotLoader from 'react-spinners/DotLoader';

const index = () => {
  const { reviews, reviewsLoading, reviewsError, mutateReviews } = fetchReviews();

  return (
    <>
      <Head>
        <title>Student Reviews || Code Geeks 9ja</title>
      </Head>
      <section
        style={{
          backgroundImage: "url('../../../assets/review-bg.jpg')",
          backgroundColor: '#121212',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <Navbar />

        {reviews && (
          <>
            <div className="text-white px-3 px-md-0 mt-5 mt-md-0 mb-5 text-center">
              <h2 className="fw-bold mt-md-5">Student Reviews</h2>
              <h6 className=" fw-bold mt-3">
                Here are reviews gotten from Code Geeks 9ja students
              </h6>
              <h6 className=" fw-bold mb-5 mt-4">4.5 out of 5 | {reviews.length} reviews</h6>
            </div>

            <div className="bx-container pb-2 px-2 px-md-5 mx-auto">
              <Row className="pt-4 pt-md-0">
                <Col md={4} className=" mt-md-5 home-image mb-2">
                  <div style={{}}>
                    <video
                      controls
                      autoPlay
                      muted
                      loop
                      src="/assets/vids/review-portable.mp4"
                      style={{
                        width: '100%',
                        height: '80%',
                        objectFit: 'cover',
                        borderTop: '2px solid #e08cf9',
                        borderBottom: '2px solid #e08cf9',
                      }}
                      className="rounded-5"
                    />
                  </div>
                </Col>
                <Col md={4} className=" mt-md-5 home-image mb-2">
                  <div style={{}}>
                    <video
                      controls
                      autoPlay
                      muted
                      loop
                      src="/assets/vids/review-souljay.mp4"
                      style={{
                        width: '100%',
                        height: '80%',
                        objectFit: 'cover',
                        borderTop: '2px solid #e08cf9',
                        borderBottom: '2px solid #e08cf9',
                      }}
                      className="rounded-5"
                    />
                  </div>
                </Col>
                <Col md={4} className=" mt-md-5 home-image mb-2">
                  <div style={{}}>
                    <video
                      controls
                      autoPlay
                      muted
                      loop
                      src="/assets/vids/Nasiru_Testimony.mp4"
                      style={{
                        width: '100%',
                        height: '80%',
                        objectFit: 'cover',
                        borderTop: '2px solid #e08cf9',
                        borderBottom: '2px solid #e08cf9',
                      }}
                      className="rounded-5"
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div style={{ background: '#0F0113' }} className="pt-5">
              <div className="text-center bx-container mt-3">
                <Row className="pb-3 px-2 px-md-5 mx-auto">
                  <ReviewCardPublic reviews={reviews} limit={20} />
                </Row>
              </div>
              <div className="text-center text-white pb-5">
                <a href="/" className="fs-normal mt-2 ">
                  LOAD MORE <BsArrowRight />
                </a>
              </div>
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
      </section>
    </>
  );
};

export default index;
