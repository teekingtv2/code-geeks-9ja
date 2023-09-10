import { Col, Row } from 'react-bootstrap';
import TopSection from '@/components/dashboard/TopSection';
import DashMenu from '@/components/dashboard/DashMenu';
import { dashBg } from '@/components/dashboard/commons/dash-bg';
import Head from 'next/head';
import DashPageTitle from '@/components/dashboard/commons/dash-page-title';
import ApplicantCard from '@/components/dashboard/applicants/ApplicantCard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import DotLoader from 'react-spinners/DotLoader';

const DashboardBlogPosts = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') {
    return (
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
    );
  }

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return (
      <>
        <Head>
          <title>Admin Dashboard || Code Geeks 9ja</title>
        </Head>
        <section style={dashBg}>
          <TopSection page="Applicants" />
          <div style={{ background: '#0F0113' }} className="py-5">
            <div className="text-center bx-container mt-5">
              <Row className="pb-3 px-3 px-md-0 justify-content-between">
                <DashMenu />

                {/* Main content */}
                <Col md={8} style={{ overflowY: 'scroll', maxHeight: '700px' }}>
                  <Row className="pb-3 px-3 px-md-0">
                    <DashPageTitle title="Applicants" />
                    <ApplicantCard />
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default DashboardBlogPosts;
