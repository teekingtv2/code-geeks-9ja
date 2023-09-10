import { Navbar } from '@/components/common';
import AdminLoginForm from '@/components/dashboard/admin/AdminLoginForm';
import RegisterBanner from '@/components/register/RegisterBanner';
import RegsiterForm from '@/components/register/RegsiterForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const router = useRouter();
  const session = useSession();
  console.log('session', session);

  if (session.status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (session.status === 'authenticated') {
    router.push('/dashboard');
  }

  if (session.status === 'unauthenticated') {
    return (
      <>
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
          <AdminLoginForm />
        </section>
      </>
    );
  }
};

export default RegisterPage;
