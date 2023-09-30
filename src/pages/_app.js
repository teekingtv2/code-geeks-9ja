import AuthProvider from '@/components/authProvider/AuthProvider';
import Layout from '../layout/Layout';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Loader from '@/components/common/Loader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

function MyApp({ Component, pageProps }) {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#b700ee');

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <AuthProvider>
        <>
          {!loading ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <div
              className="fs-large fw-bold"
              style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Loader />
            </div>
          )}
        </>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
