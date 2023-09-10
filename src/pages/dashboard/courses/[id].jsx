import { Col, Row } from 'react-bootstrap';
import TopSection from '@/components/dashboard/TopSection';
import DashMenu from '@/components/dashboard/DashMenu';
import { dashBg } from '@/components/dashboard/commons/dash-bg';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import EditOpenCourseForm from '@/components/dashboard/courses/EditOpenCourseForm';
import { fetchCourseById } from '@/backend/api';
import Loader from '@/components/common/Loader';

export function getServerSideProps(context) {
  const { id } = context.params;
  return {
    props: {
      id: id,
    },
  };
}

const DashboardEditOpenCourse = (props) => {
  const session = useSession();
  const router = useRouter();
  const id = props.id;

  const { oCourse, oCourseLoading, oCourseError, mutateOCourse } = fetchCourseById(id);

  if (session.status === 'loading') {
    return <Loader />;
  }

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return (
      <section style={dashBg}>
        <TopSection page="Course" />
        <div style={{ background: '#0F0113' }} className="py-5">
          <div className="text-center bx-container mt-5">
            <Row className="pb-3 px-3 px-md-0 justify-content-between">
              <DashMenu />

              {/* Main content */}
              <Col md={8} style={{ overflowY: 'scroll', maxHeight: '700px' }}>
                <Row className="pb-3 px-3 px-md-0">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontWeight: 'bold',
                      color: '#e08cf9',
                    }}
                  >
                    <h5 className="pb-4 text-start" style={{ color: '#eee', fontSize: '17px' }}>
                      Welcome to the Admin Dashboard
                    </h5>
                  </div>
                  <div className="mb-3">
                    {oCourse && <EditOpenCourseForm id={id} oCourse={oCourse} />}
                    {oCourseLoading && <Loader />}
                    {oCourseError && <div>{oCourseError}</div>}
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
};

export default DashboardEditOpenCourse;
