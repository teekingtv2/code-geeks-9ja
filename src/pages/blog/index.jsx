// 'use client';
import { Navbar } from "@/components/common";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import Link from "next/link";
import { fetchPosts } from "@/backend/api";
import Head from "next/head";
import TrackVisibility from "react-on-screen";

const blog = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { posts, postsLoading, postsError, mutatePosts } = fetchPosts();

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts', { signal: abortController.signal })
  //     .then((response) => {
  //       console.log('result is: ', response);
  //       if (response.status !== 200) {
  //         throw Error('Could not fetch data from the data source');
  //       }
  //       setData(response.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err.name === 'CanceledError') {
  //       } else {
  //         setLoading(false);
  //         setError(err.message);
  //         console.log(err.message);
  //       }
  //     });
  //   return () => abortController.abort();
  // }, []);

  return (
    <>
      <Head>
        <title>News & More || Code Geeks 9ja</title>
      </Head>
      <section className="review-bg pt-4">
        <Navbar />

        <div className="bx-container">
          <div className="">
            <h3 className=" text-center px-3 py-2 mt-5 text-white fw-bold ">
              Some news for ya!
            </h3>
          </div>
          {posts && (
            <Row className="pb-5 mt-5 px-md-5">
              {posts
                .filter((post) => post.category === "Blog Posts")
                .map((post, index) => (
                  <Col md={4} className="p-0 p-md-3 mb-3" key={index}>
                    <TrackVisibility>
                      {({ isVisible }) => (
                        <div
                          className={
                            isVisible
                              ? "animate__slower animate__animated animate__fadeIn"
                              : ""
                          }
                        >
                          <div
                            className="card bg-transparent px-md-3 px-3 border card-border rounded-3 news-card"
                            style={{ width: "100%" }}
                          >
                            <div>
                              <img
                                src={post.img}
                                width="100%"
                                height="250"
                                alt={`${post.title} - Code Geeks 9ja`}
                                className="mt-3"
                              />
                              <div className="card-body">
                                <button
                                  className="btnn2 mt-md-0 mt-3 px-3 py-2"
                                  type="submit"
                                >
                                  <a className="text-white fs-small fw-bold ">
                                    Devops{" "}
                                  </a>
                                </button>
                                <Link
                                  href={`/blog/${post.slug}`}
                                  className="fs-normal fw-bold text-white mt-3 d-block"
                                >
                                  {post?.title?.substr(0, 30)}...
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </TrackVisibility>
                  </Col>
                ))}

              <div className="text-center text-white mt-3">
                <a href="/blog" className="fs-normal mt-4 ">
                  SEE MORE <BsArrowRight />
                </a>
              </div>
            </Row>
          )}
          {postsError !== "" ? <div>{postsError}</div> : null}
          {postsLoading === true ? (
            <div className="flex justify-content-center align-items-center p-5">
              <div className="fs-xlarge text-light fw-bold text-center p-5">
                Loading
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default blog;
