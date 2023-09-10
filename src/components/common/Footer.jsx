import { Col, Row } from 'react-bootstrap';
import { BsArrowUpCircle, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Link from 'next/link';

const Footer = () => {
  return (
    <section
      className="pt-5"
      style={{
        backgroundImage: "url('/assets/footer-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bx-container mx-auto">
        <Row>
          <Col xs={6} md={3} xl={3}>
            <ul>
              <h5 className="text-white"> Company</h5>
            </ul>
            <div className="footer-text-color fs-normal">
              <Link href="/about">
                <ul> About</ul>
              </Link>
              <Link href="/about">
                <ul>Our Services</ul>
              </Link>
              <Link href="/about">
                <ul>Gallery</ul>
              </Link>
            </div>
          </Col>

          <Col xs={6} md={3} xl={3}>
            <ul>
              <h5 className="text-white">Students</h5>
            </ul>
            <div className="footer-text-color fs-normal">
              <Link href="/reviews">
                <ul>Student Reviews</ul>
              </Link>
              <Link href="/register">
                <ul>Get Started</ul>
              </Link>
            </div>
          </Col>

          <Col xs={6} md={3} xl={3}>
            <ul>
              <h5 className="text-white">Explore</h5>
            </ul>
            <div className="footer-text-color fs-normal">
              <Link href="/blog">
                <ul>Tech News</ul>
              </Link>
              <Link href="/blog">
                <ul>Tech Careers</ul>
              </Link>
              <Link href="/#courses">
                <ul>Courses </ul>
              </Link>
            </div>
          </Col>

          <Col xs={6} md={3} xl={3}>
            <ul>
              <h5 className="text-white">Legal & Help</h5>
            </ul>
            <div className="footer-text-color fs-normal">
              <Link href="/">
                <ul>Privacy Policy</ul>
              </Link>
              <Link href="/">
                <ul>Terms & Conditions</ul>
              </Link>
              <Link href="/contact">
                <ul>Contact Us</ul>
              </Link>
            </div>
          </Col>
          <Col md={3} className="ms-md-4">
            <hr />
          </Col>
        </Row>

        <div className=" text-center text-white">
          <img
            src="/assets/logo.png"
            alt="Code Geeks 9ja"
            className="img-fluid mb-1"
            style={{ width: '8rem', height: 'auto' }}
          />
          <h6 className="letter-space mb-2"> CODE GEEKS 9JA</h6>
          <p className="fs-small">Copyright &copy; 2023, Code Geeks 9ja. All rights reserverd. </p>

          <div>
            <a href="https://instagram.com/codegeeks9ja" target="_blank" className="mx-3">
              <BsInstagram size={20} />
            </a>
            <a href="https://x.com/codegeeks9ja" target="_blank">
              <BsTwitter size={20} />
            </a>
            <a href="https://facebook.com/codegeeks9ja" target="_blank" className="mx-3">
              <BsFacebook size={20} />
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, right: 0, behavior: 'smooth' });
        }}
        style={{}}
        className="scroll-top"
      >
        <BsArrowUpCircle size={24} color="#fff" />
      </button>
      <FloatingWhatsApp
        phoneNumber="2349046832081"
        accountName="Code Geeks 9ja"
        notification={true}
        allowClickAway
        darkMode
        avatar="/assets/logo.png"
        statusMessage="Replies instantly"
        className="chat-icon"
        buttonClassName="chat-icon"
        // buttonStyle={{ marginBottom: '1rem', size: '1rem', width: '5px' }}
      />
    </section>
  );
};

export default Footer;
