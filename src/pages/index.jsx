// import MyTimer from '../components/landing-page/CountDown';
import { Navbar } from '../components/common';
import { Banner, CoursesSection, MasterCoding, News, Review } from '../components/landing-page';
import Head from 'next/head';
// import MyTimer from '../components/landing-page/count-down/MyTimer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Code Geeks 9ja</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          backgroundImage: "url('../../../assets/home-banner.png')",
          backgroundColor: '#121212',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />
        <Banner />
      </main>

      <MasterCoding />
      <CoursesSection />
      <Review />
      <News />
    </>
  );
}
