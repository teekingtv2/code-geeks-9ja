import 'animate.css';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import DateTimeDisplay from './count-down/DateTimeDisplay.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../common/Loader.jsx';

const banner = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expiryTime, setExpiryTime] = useState('');

  useEffect(() => {
    axios
      .get('/api/course/single')
      .then((response) => {
        if (response.status !== 200) {
          throw Error('Could not fetch data from the data source');
        }
        setData(response.data.oCourse);
        setExpiryTime(response.data.oCourse.expiry);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        console.log(err.message);
      });
  }, []);

  const [expired, setExpired] = useState(false);
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: '',
    countdownHours: '',
    countdownMinutes: '',
    countdownSeconds: '',
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpired(true);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <section className="pb-5 bx-container p-0 position-relative">
      <Row className="p-0 align-items-center py-3 pb-5 py-md-5" style={{ position: 'relative' }}>
        <Col md={8} className=" mt-5 m3 m-md-0">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? 'animate__slower animate__animated animate__flipInX' : ''}
              >
                <div className="mt-0 mt-md-5" style={{ width: '100%', background: 'transparent' }}>
                  <span className="fw-bold text-white fs-normal text-center border rounded-4 p-2 mb-4 text-center w-fluid">
                    Welcome to the world of coding skill mastery
                  </span>
                  <h2 className="text-white fw-bold mb-4 mt-3">
                    Become The Next Code Geek In 9ja!
                  </h2>
                  <p className="text-lg mb-4 text-white footer-text-color">
                    Access a variety of effective private trainings and
                    <br className="d-none d-md-block" /> personified learning experiences that are
                    designed <br className="d-none d-md-block" /> just for you. Master coding
                    through proper mentoring
                  </p>

                  <Link href="/register" style={{ padding: '9px 50px' }} className="mb-5 mt-4">
                    <div className="btnn btnn1 rounded-2 text-white fs-small text-center">
                      <BsPencilSquare /> Get Started
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </TrackVisibility>
        </Col>

        <Col md={4} className=" mt-md-5 m-md-0 px-3 px-md-2">
          {/* <TrackVisibility>
            {({ isVisible }) => ( */}
          <div className={'animate__slower animate__animated animate__zoomIn'}>
            {data && (
              <div className="home-right-banner dark-shadow-lg card-border text-black rounded-4 w-100 px-0 pb-4">
                <div
                  className="p-3 border-0 rounded-top-4 text-center"
                  style={{ background: '#E08CF9' }}
                >
                  <p className="p-0 m-0 fs-small">Hot Career Course! 🔥🔥</p>
                  <h6 className="fw-bold py-1">{data.course}</h6>
                  <p className="fs-6 p-0">Course starts in </p>

                  {!expiryTime ? (
                    <div></div>
                  ) : (
                    <div className="show-counter pt-0">
                      <DateTimeDisplay
                        value={countdownTime.countdownDays}
                        type={'Days'}
                        isDanger={Number(countdownTime.countdownDays) <= 3 ? true : false}
                      />
                      <p>:</p>
                      <DateTimeDisplay
                        value={countdownTime.countdownHours}
                        type={'Hours'}
                        isDanger={Number(countdownTime.countdownDays) <= 3 ? true : false}
                      />
                      <p>:</p>
                      <DateTimeDisplay
                        value={countdownTime.countdownMinutes}
                        type={'Mins'}
                        isDanger={Number(countdownTime.countdownDays) <= 3 ? true : false}
                      />
                      <p>:</p>
                      <DateTimeDisplay
                        value={countdownTime.countdownSeconds}
                        type={'Seconds'}
                        isDanger={Number(countdownTime.countdownDays) <= 3 ? true : false}
                      />
                    </div>
                  )}
                </div>
                <div className="card-body text-white">
                  <p className="card-text text-white fs-small p-3">
                    The development journey will take you through mastering fullstack web
                    application development using {data.curriculum}, from absolute zero to hero
                  </p>

                  <div className="text-center px-5">
                    <Row>
                      <Col md={4} xs={4} className="mb-3">
                        <div className="round-bg">
                          <img
                            src="/assets/html.png"
                            alt="Code Geeks 9ja"
                            className="p-3 img-fluid"
                          />
                        </div>
                      </Col>
                      <Col md={4} xs={4} className="mb-3">
                        <div className="round-bg">
                          <img
                            src="/assets/css.png"
                            alt="Code Geeks 9ja"
                            className="p-3 img-fluid"
                          />
                        </div>
                      </Col>
                      <Col md={4} xs={4} className="mb-3">
                        <div className="round-bg">
                          <img
                            src="/assets/javascript.png"
                            alt="Code Geeks 9ja"
                            className="p-3 img-fluid"
                          />
                        </div>
                      </Col>
                      <Col md={4} xs={4} className="mb-3">
                        <div className="round-bg">
                          <img
                            src="/assets/reactjs.png"
                            alt="Code Geeks 9ja"
                            className="mt-1 img-fluid"
                          />
                        </div>
                      </Col>
                      {!data.curriculum.includes('NodeJS') ? null : (
                        <Col md={4} xs={4} className="mb-3">
                          <div className="round-bg">
                            <img
                              src="/assets/node.png"
                              alt="Code Geeks 9ja"
                              className="mt-1 img-fluid"
                            />
                          </div>
                        </Col>
                      )}
                      {data.curriculum.includes('MongoDB') ? null : (
                        <Col md={4} xs={4} className="mb-3">
                          <div
                            className="round-bg"
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '5px',
                            }}
                          >
                            <img src="/next.svg" alt="Code Geeks 9ja" className="mt-1 img-fluid" />
                          </div>
                        </Col>
                      )}
                      {!data.curriculum.includes('MongoDB') ? null : (
                        <Col md={4} xs={4} className="mb-3">
                          <div className="round-bg">
                            <img
                              src="/assets/mongodb.png"
                              alt="Code Geeks 9ja"
                              className=" mt-1 img-fluid"
                            />
                          </div>
                        </Col>
                      )}
                      {!data.curriculum.includes('NextJS') ? null : (
                        <Col md={4} xs={4} className="mb-3">
                          <div
                            className="round-bg"
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '14px',
                            }}
                          >
                            <img
                              src="/assets/git.jpg"
                              alt="Code Geeks 9ja"
                              className=" mt-1 img-fluid"
                            />
                          </div>
                        </Col>
                      )}

                      <div className="text-center">
                        <Link
                          href="/register"
                          style={{ padding: '9px 50px' }}
                          className="btnn btnn1 fw-bold rounded-2 text-white fs-small mb-3"
                        >
                          Register
                        </Link>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            )}
            {loading && <Loader />}
            {error && <div>{error}</div>}
          </div>
          {/* //   )}
          // </TrackVisibility> */}
        </Col>
        <img
          src="/assets/computer.png"
          alt="Code Geeks 9ja"
          className="img-fluid p-md-0 home-computer-torate"
          style={{ width: '15rem', height: 'auto' }}
        />
      </Row>
    </section>
  );
};

export default banner;
