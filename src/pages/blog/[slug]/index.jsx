import { fetchSinglePost } from '@/backend/api';
import { Navbar } from '@/components/common';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export function getServerSideProps(context) {
  const { slug } = context.params;
  return {
    props: {
      slug: slug,
    },
  };
}

const index = (props) => {
  const slug = props.slug;
  console.log('slug: ', slug);
  const { post, postLoading, postError, mutatePost } = fetchSinglePost(slug);

  return (
    <>
      {post && (
        <>
          <Head>
            <title>{post.title}</title>
          </Head>
          <section className="review-bg text-white pb-4">
            <div>
              <Navbar />
              <div className="bx-container pt-3 pb-5 ps-md-5">
                <Link href="/">Home</Link> / <Link href="/blog">{post.category}</Link> /{post.title}
                <hr className="mt-4" />
              </div>
            </div>

            <div className="slug-container rounded-5">
              <div className="pt-3 pt-md-5 pb-4">
                <h6 style={{ color: '#bbb' }}> {post.category}</h6>
                <h3>{post.title}</h3>
              </div>

              <div
                className="d-flex justify-content-center px-4 py-2 mb-3"
                style={{ width: 'max-content' }}
              >
                <h5>
                  <img
                    src="/assets/icons/user.png"
                    alt="Code Geeks 9ja"
                    width="50px"
                    className="me-3"
                  />
                </h5>
                <div>
                  <h6 className="mt-1 fs-small fs-bold"> {post.username}</h6>
                  <span className="fs-small m-0 ">{post.userskill}</span>
                </div>
              </div>

              <div>
                <img src={post.img} alt="Code Geeks 9ja" width="100%" className="mb-5 img-fluid" />

                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{ textAlign: 'justify', color: '#ccc', fontSize: '14px' }}
                />
              </div>

              <div className="mt-5 pt-3">
                <Row>
                  <Col md={10} className="p-2">
                    <Link href="/" className=" border fs-small py-2 px-4 me-1">
                      {post.category}
                    </Link>
                  </Col>

                  <Col md={2} className="d-flex mt-3">
                    <h5 className="mx-2">
                      <FaFacebookF />
                    </h5>
                    <h5 className="mx-2">
                      <FaTwitter />
                    </h5>
                    <h5 className="mx-2">
                      {' '}
                      <FaLinkedinIn />
                    </h5>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
        </>
      )}
      {postError !== '' ? <div>{postError}</div> : null}
      {postLoading === true ? (
        <div className="flex justify-content-center align-items-center p-5">
          <div className="fs-xlarge text-light fw-bold text-center p-5">Loading</div>
        </div>
      ) : null}
    </>
  );
};

export default index;
