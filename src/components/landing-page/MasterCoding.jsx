import 'animate.css';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
// import TrackVisibility from "react-on-screen";

const masterCoding = () => {
  return (
    <section className=" position-relative pb-5 " style={{ background: '#0F0113' }}>
      <div className="pb-5 bx-container p-0 home-container">
        <Row className="pb-5 text-white pe-md-0 align-items-center">
          <Col
            md={6}
            className=" mt-5 mb-5 mb-md-0 animate__slower animate__animated animate__zoomIn"
          >
            <div
              className=" card-border rounded-3 ps-3 pt-3 fs-small mt-md-5 text-start"
              style={{ width: '15rem', height: 'auto' }}
            >
              <h6 className="fs-small lh-base">We have what it takes to help you</h6>
              <h4 className="text-color fw-bold">Master Coding!</h4>
            </div>
            <div className="mt-4">
              <h6 className="fs-large lh-base fw-bold my-4">
                You Garner Practical Experiences By Building Real Life Apps for Jaflah
              </h6>
            </div>
            <div className="mt-md-3" style={{ height: 'auto' }}>
              <p className="fs-normal footer-text-color">
                Our Affiliation with Jaflah Software Development Company, the mother company of Code
                Geeks 9ja paved way to the incredible feature that differentiates Code Geeks 9ja
                from other IT institutes in the country as it allows our trainees to have direct
                access to production applications coding. As an engineer, there are issues that you
                would only face on production apps. As well, there is a limit to what you can learn
                and experience by building test apps locally on your computers. Things can become a
                little scarier in live apps. And so you do not get lost when you face job interviews
                or pushed into a heavy code base, outside our horizons, we give you the opportunity
                to equip yourself and strengthen your portfolio with proven live applications. This
                is priceless and will only benefit you greatly as you dive into the ocean of job
                opportunities in the software development world.
              </p>

              <Link href="/about" className="fs-normal text-color fw-bold mt-2">
                Read more...
              </Link>
            </div>
          </Col>

          <Col
            md={6}
            className=" mt-md-5 ps-md-5 home-image animate__slower animate__animated animate__zoomIn"
          >
            <div style={{}}>
              <video
                controls
                autoPlay
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
        </Row>
      </div>
      <Container className=" animate__bounceIn pb-5 ps-md-4"></Container>
    </section>
  );
};

export default masterCoding;
