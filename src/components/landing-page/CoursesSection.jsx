import { Col, Container, Row } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';
import TrackVisibility from 'react-on-screen';

const courses = () => {
  return (
    <section
      className=" py-5 course-section"
      style={{
        backgroundImage: "url('../../../assets/banner-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '51rem',
      }}
    >
      <div className="position-relative" id="courses">
        <Container className="p-5">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? 'animate__slower animate__animated animate__tada' : ''}>
                <div className="card dark-shadow-lg rounded-5 fullstack-card text-center p-4 position-absolute  top-0 start-50 translate-middle">
                  <div className="">
                    <button className="btnn2 mt-md-0 mt-2" type="submit">
                      <a className="text-color fs-small fw-bold ">STARTING SOON</a>
                    </button>
                    <h6 className="fs-small fw-bolder mt-3">
                      Fullstack Web Development <br /> Using MERN Stack
                    </h6>
                    <p className="fs-small">
                      The development journey will take you through mastering fullstack web
                      application development using HTML, CSS, Javascript, ReactJS, Styling
                      Components, NodeJS + Express, MongoDB from absolute zero to hero
                    </p>

                    <Row>
                      <Col md={2} xs={4} className="mb-3">
                        <div className="round-bg">
                          <img
                            src="/assets/html.png"
                            alt="Code Geeks 9ja"
                            className="p-3 img-fluid"
                          />
                        </div>
                      </Col>
                      <Col md={2} xs={4} className="mb-3">
                        <div className="round-bg">
                          <img
                            src="/assets/css.png"
                            alt="Code Geeks 9ja"
                            className="p-3 img-fluid"
                          />
                        </div>
                      </Col>
                      <Col md={2} xs={4} className="mb-3">
                        <div className="round-bg">
                          <img
                            src="/assets/javascript.png"
                            alt="Code Geeks 9ja"
                            className="p-3 img-fluid"
                          />
                        </div>
                      </Col>
                      <Col md={2} xs={4} className="mb-3">
                        <div className="round-bg">
                          <img
                            src="/assets/reactjs.png"
                            alt="Code Geeks 9ja"
                            className="mt-2 img-fluid"
                          />
                        </div>
                      </Col>
                      <Col md={2} xs={4} className="mb-3">
                        <div className="round-bg">
                          <img
                            src="/assets/node.png"
                            alt="Code Geeks 9ja"
                            className="mt-2 img-fluid"
                          />
                        </div>
                      </Col>
                      <Col md={2} xs={4} className="mb-3">
                        <div className="round-bg">
                          <img
                            src="/assets/mongodb.png"
                            alt="Code Geeks 9ja"
                            className=" mt-2 img-fluid"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </div>

      <Container className="bx-container pt-5 mt-5 pb-5">
        <Row className="mt-md-3 mt-5 mb-5 pt-5 pt-md-3 pb-5">
          <div className="text-center mt-md-0 mt-5">
            <button className="btnn3 mt-md-0 mb-5 mt-3" type="submit">
              <a className="text-white fs-normal fw-bold ">OTHER AVAILABLE COURSES</a>
            </button>
          </div>
          <Col md={3} xs={6} className="mb-3 text-center">
            <div className="card border bg-color px-4 py-2 py-md-4 text-white dark-shadow-lg avaliable-courses-card">
              <h3>
                <img src="/assets/reactjs.png" alt="Code Geeks 9ja" className="mt-2 img-fluid" />
              </h3>
              <div className="card-title">
                <h6 className="fs-small">FRONTEND DEVELOPMENT</h6>
              </div>
              <p className="fs-small footer-text-color">
                HTML, CSS, Javascript, Bootstrap, ReactJS, NextJS
              </p>
            </div>
          </Col>
          <Col md={3} xs={6} className="mb-3 text-center ">
            <div className="card border bg-color px-4 py-2 py-md-4 text-white dark-shadow-lg avaliable-courses-card">
              <h2>
                <img src="/assets/node.png" alt="Code Geeks 9ja" className="mt-2 img-fluid" />
              </h2>
              <div className="card-title">
                <h6 className="fs-small">BACKEND DEVELOPMENT</h6>
              </div>
              <p className="fs-small footer-text-color">
                NodeJS, ExpressJS, NestJS, MongoDB, PostgreSQL, MySQL
              </p>
            </div>
          </Col>
          <Col md={3} xs={6} className="mb-3 text-center ">
            <div className="card border bg-color px-4 py-2 py-md-4 text-white dark-shadow-lg avaliable-courses-card ">
              <h3>
                <img
                  height={43}
                  width={43}
                  src="/assets/react-native.png"
                  alt="Code Geeks 9ja"
                  className="mt-2 img-fluid"
                />
              </h3>
              <div className="card-title">
                <h6 className="fs-small">MOBILE APP DEVELOPMENT</h6>
              </div>
              <p className="fs-small footer-text-color">
                With React Native frontend, NodeJS+Express & MongoDB
              </p>
            </div>
          </Col>
          <Col md={3} xs={6} className="mb-3 text-center ">
            <div className="card border bg-color px-4 py-2 py-md-4 text-white dark-shadow-lg avaliable-courses-card ">
              <h3>
                <img
                  src="/assets/flutter.png"
                  height={40}
                  width={40}
                  alt="Code Geeks 9ja"
                  className="my-2 img-fluid"
                />
              </h3>
              <div className="card-title">
                <h6 className="fs-small">MOBILE APP DEVELOPMENT</h6>
              </div>
              <p className="fs-small footer-text-color">
                Flutter (Dart) frontend, NodeJS+Express & MongoDB
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default courses;
