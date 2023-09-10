import { Col, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

const RegisterBanner = () => {
  return (
    <section className="pt-5 position-relative mt-5">
      <Row className="px-4 py-4 text-light text-center mt-md-0 mt-5 ">
        <Col xs={7} md={3} className="overlap">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__slower animate__animated animate__bounce"
                    : ""
                }
              >
                <img
                  src="/assets/icons/register.svg"
                  alt="Code Geeks 9ja"
                  width="100%"
                  className=""
                />
              </div>
            )}
          </TrackVisibility>
        </Col>
        <h3 className="fs-large mt-3 mt-md-0 ">Get Started By Registring for a Course</h3>
      </Row>
    </section>
  );
};

export default RegisterBanner;
