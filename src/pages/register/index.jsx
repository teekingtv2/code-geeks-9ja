import { Navbar } from '@/components/common';
import RegisterBanner from '@/components/register/RegisterBanner';
import RegsiterForm from '@/components/register/RegsiterForm';
import Head from 'next/head';

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Register With Us || Code Geeks 9ja</title>
      </Head>
      <section
        style={{
          backgroundImage: "url('../../../assets/home-banner.png')",
          backgroundColor: '#121212',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />
        <RegisterBanner />
        {/* <TestForm /> */}
        <RegsiterForm />
      </section>
    </>
  );
};

export default RegisterPage;
