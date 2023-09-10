import { Col, Row } from 'react-bootstrap';
import TopSection from '@/components/dashboard/TopSection';
import DashMenu from '@/components/dashboard/DashMenu';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { fetchApplicants, fetchCourses, fetchPosts } from '@/backend/api';
import DashCard from '@/components/dashboard/DashCard';
import Loader from '@/components/common/Loader';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const { applicants, applicantsLoading, applicantsError, mutateApplicants } = fetchApplicants();
  const { oCourse, oCourseLoading, oCourseError, mutateOCourse } = fetchCourses();
  const { posts, postsLoading, postsError, mutatePosts } = fetchPosts();

  if (session.status === 'loading') {
    return <Loader />;
  }

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return (
      <section
        style={{
          backgroundImage: "url('../../../assets/review-bg.jpg')",
          backgroundColor: '#121212',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <TopSection page="Home" />
        <div style={{ background: '#0F0113' }} className="py-5">
          <div className="text-center bx-container mt-5">
            <Row className="pb-3 px-3 px-md-0 justify-content-between">
              <DashMenu />

              {/* Main content */}
              <Col md={8} style={{ overflowY: 'scroll', maxHeight: '700px' }}>
                <Row className="pb-3 px-3 px-md-0">
                  <h5 className="pb-4 text-start" style={{ color: '#eee', fontSize: '17px' }}>
                    Welcome to the Admin Dashboard
                  </h5>
                  {applicants && (
                    <DashCard
                      title="Total Registered"
                      data={applicants.length}
                      icon="expertise"
                      link="/dashboard/applicants"
                    />
                  )}
                  {applicantsLoading && <Loader />}
                  {applicantsError && <div>{applicantsError}</div>}

                  {posts && (
                    <DashCard
                      title="Total Posts"
                      data={posts.length}
                      icon="mentorship"
                      link="/dashboard/posts"
                    />
                  )}
                  {postsLoading && <Loader />}
                  {postsError && <div>{postsError}</div>}

                  {oCourse && (
                    <DashCard
                      title="Total Courses"
                      data={oCourse.length}
                      icon="training-icon1"
                      link="/dashboard/courses"
                    />
                  )}
                  {oCourseLoading && <Loader />}
                  {oCourseError && <div>{oCourseError}</div>}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
};

export default Dashboard;
