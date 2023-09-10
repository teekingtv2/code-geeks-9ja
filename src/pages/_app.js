import AuthProvider from '@/components/authProvider/AuthProvider';
import Layout from '../layout/Layout';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import DotLoader from 'react-spinners/DotLoader';

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
              <DotLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        </>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
