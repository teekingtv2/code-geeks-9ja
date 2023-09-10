import { Col, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { newsContent } from '../../../src/data/mockData';
import Link from 'next/link';
import { fetchPosts } from '@/backend/api';
import DotLoader from 'react-spinners/DotLoader';

const News = () => {
  const { posts, postsLoading, postsError, mutatePosts } = fetchPosts();

  return (
    <section className="review-bg pt-4">
      <div className="bx-container">
        <div className="text-center">
          <button className="btnn btnn1 px-3 py-2" type="submit">
            <a className="text-white fs-small fw-bold ">NEWS FOR YOU</a>
          </button>
        </div>

        <Row className="pb-5 mt-5">
          {posts && (
            <>
              <Col md={5} className="p-0 p-md-3">
                <div
                  className="card bg-transparent px-md-3 px-3 border card-border rounded-3 news-card"
                  style={{ width: '27rem' }}
                >
                  {posts?.slice(0, 1).map((news, index) => {
                    return (
                      <div key={index}>
                        <Link href={`/blog/${news.slug}`}>
                          <img
                            src={news.img}
                            width="100%"
                            height="250"
                            alt="Code Geeks 9ja"
                            className="mt-3"
                          />
                        </Link>
                        <div className="card-body">
                          <button className="btnn2 mt-md-0 mt-3 px-3 py-2" type="submit">
                            <span className="text-white fs-small fw-bold ">{news.category} </span>
                          </button>
                          <Link href={`/blog/${news.slug}`}>
                            <p className="fs-normal fw-bold text-white mt-3">
                              {news?.title?.substr(0, 45)}...
                            </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
              <Col md={7} className="mt-4 mt-md-0 mb-3 p-0 p-md-3">
                <div
                  className="card bg-transparent px-md-2 px-3 border card-border rounded-3 news-card"
                  style={{ width: '100%' }}
                >
                  <Row>
                    {posts?.slice(1, 3).map((news, index) => {
                      return (
                        <Col md={6} key={index}>
                          <div>
                            <Link href={`/blog/${news?.slug}`}>
                              <img
                                src={news?.img}
                                width="100%"
                                height="250"
                                alt="Code Geeks 9ja"
                                className="mt-3"
                              />
                            </Link>
                            <div className="card-body">
                              <button className="btnn2 mt-md-0 mt-3 px-3 py-2" type="submit">
                                <span className="text-white fs-small fw-bold ">
                                  {news.category}{' '}
                                </span>
                              </button>
                              <Link href={`/blog/${news.slug}`}>
                                <p className="fs-normal fw-bold text-white mt-3">
                                  {news?.title?.substr(0, 33)}...
                                </p>
                              </Link>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </>
          )}
          {postsLoading && (
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
          {postsError && <div>{postsError}</div>}
          <div className="text-center text-white mt-3">
            <a href="/blog" className="fs-normal mt-4 ">
              SEE MORE <BsArrowRight />
            </a>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default News;
