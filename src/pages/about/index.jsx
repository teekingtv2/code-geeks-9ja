import { Navbar } from '@/components/common';
import { Banner, SectionThree, SectionTwo } from '@/components/about-page';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us || Code Geeks 9ja</title>
      </Head>
      <main
        style={{
          backgroundImage: "url('../../../assets/review-bg.jpg')",
          backgroundColor: '#121212',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />
        <Banner />
      </main>
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default About;
