import { Col, Row } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { GoMail, GoMegaphone } from 'react-icons/go';
import TrackVisibility from 'react-on-screen';

const SectionTwo = () => {
  return (
    <section className="review-b pt-4">
      <div className="text-center my-5 py-md-5">
        <h2 className="text-white fw-bold ">
          Swiftly Contact <span style={{ color: '#e08cf9' }}>Us</span>
        </h2>
      </div>

      <div className="review-bg">
        <div className="bx-container pt-3 pb-2 px-md-5">
          <div className=" text-center text-white mt-5 mb-5 pb-3">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? 'animate__slower animate__animated animate__pulse' : ''}
                >
                  <img
                    src="/assets/contact.jpg"
                    alt="Code Geek 9ja"
                    className="img-fluid"
                    width="800"
                  />
                </div>
              )}
            </TrackVisibility>
          </div>

          <Row className="pb-5 mt-5 " style={{ color: '#eee' }}>
            <Col md={6} className="p-0 p-md-3 mb-3">
              <div>
                <h4>Get In Touch With Us Today</h4>
                <p style={{ fontSize: '16px', color: '#bbb' }}>
                  Have some questions, suggestions, enquiries, partnership or business opportunities
                  for us? Kindly get in touch with us via these mediums
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '25px',
                    alignItems: 'center',
                    marginBottom: '25px',
                  }}
                >
                  <a href="https://instagram.com/codegeeks9ja" target="_blank" className="">
                    <BsInstagram size={25} />
                  </a>
                  <a href="https://x.com/codegeeks9ja" target="_blank">
                    <BsTwitter size={25} />
                  </a>
                  <a href="https://facebook.com/codegeeks9ja" target="_blank" className="">
                    <BsFacebook size={25} />
                  </a>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <Row className="pe-md-5">
                <Col md={6} className="mb-4">
                  <div
                    className="d-flex justify-content-center rounded-3 px-4 py-3 "
                    style={{ borderLeft: '2px solid #e08cf9' }}
                  >
                    <h5>
                      <GoMail className="me-3" size={25} />
                    </h5>
                    <div>
                      <h6 className="m-0 fs-normal fs-bold"> Suggestions, Partnerships</h6>
                      <span className="fs-normal m-0 ">
                        <a href="mailto:code@email.com ">info@codegeeks9ja.com</a>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div
                    className="d-flex justify-content-center rounded-3 px-4 py-3 "
                    style={{ borderRight: '2px solid #e08cf9' }}
                  >
                    <h5>
                      <GoMail className="me-3" size={25} />
                    </h5>
                    <div>
                      <h6 className="m-0 fs-normal fs-bold"> Training enquiries, Others</h6>
                      <span className="fs-normal m-0 ">
                        <a href="mailto:code@email.com ">hello@codegeeks9ja.com</a>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="pe-md-5">
                <Col md={6} className="mb-4">
                  <div
                    className="d-flex justify-content-center rounded-3 px-4 py-3 "
                    style={{ borderLeft: '2px solid #e08cf9' }}
                  >
                    <h5>
                      <FaPhone className="me-3" size={25} />
                    </h5>
                    <div>
                      <h6 className="m-0 fs-normal fs-bold"> WhatsApp and Calls</h6>
                      <span className="fs-normal m-0 ">
                        <a href="tel:+2349046832081">+234 904 6832 081</a>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div
                    className="d-flex justify-content-center rounded-3 px-4 py-3 "
                    style={{ borderRight: '2px solid #e08cf9' }}
                  >
                    <h5>
                      <FaWhatsapp className="me-3" size={25} />
                    </h5>
                    <div>
                      <h6 className="m-0 fs-normal fs-bold"> WhatsApp Only</h6>
                      <span className="fs-normal m-0 ">
                        <a href="https://wa.me/2348143443420">+234 8143 443 420</a>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
