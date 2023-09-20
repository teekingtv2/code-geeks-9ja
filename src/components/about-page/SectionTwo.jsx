import 'animate.css';
import { Col, Row } from 'react-bootstrap';

const SectionTwo = () => {
  return (
    <section style={{ background: '#0F0113' }} className="position-relative">
      <div className="pb-md-5 bx-container">
        <Row className="align-items-center py-3 py-md-0 ">
          <Col md={4} className=" mt-5 px-3 pt-5 px-md-2">
            <div className="dark-shadow-lg border text-white rounded-4 p-md-4 p-3 mt-5 ">
              <p className="text-color text-center">How Code Geeks 9ja Works</p>

              <p className="fs-normal" style={{ textAlign: 'justify' }}>
                At Code Geeks 9ja, things done differently. Our mentees have daily direct access to
                their assigned trainers after classes, with healthy close relationship that gives
                them more absolute freedom to learn and progress at a lightening speed. Their
                progresses are monitored individually, and they have enough time to meet up with the
                speed of the curriculum progression. No question is reagrded as silly. You are here
                for the career rather than just knwoledge afterall. Regardless of the course you
                subscribed for, you are provided with an all-round career mentorship. Which means
                beside the usual training sessions that you would have access to, like in other
                institutes, you are properly mentored in a personalized manner. Beyond the training
                period, we become the career coach and help you in amassing maximum job experience
                possible by building production projects for Jaflah Software Development Company's
                clients. This is a must-do for every trainee as it helps them garner on-the job
                experiences that are crucial in their career life. While at it, you are given
                complete help and guidance in solving complex tasks.
              </p>
            </div>
          </Col>
          <Col md={4} className="p-0 text-center">
            <img
              src="/assets/computer.png"
              alt="Code Geeks 9ja"
              className="img-fluid p-md-0 about-computer-torate"
              style={{ width: '20rem', height: 'auto' }}
            />
          </Col>
          <Col md={4} className=" mt- p-0 laptop-setup">
            <div className="mt- mt-3 rounded-5">
              <img
                src="/assets/code-1.jpg"
                alt="Code Geeks 9ja"
                className="img-fluid p-5 p-md-0 rounded-5"
                style={{
                  borderTopLeftRadius: '50px !important',
                  borderBottomLeftRadius: '50px !important',
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SectionTwo;
