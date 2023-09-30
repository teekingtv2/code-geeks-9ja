import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <title>Welcome to Code Geeks 9ja</title>
        <meta
          name="description"
          content="Welcome to the world of coding skill mastery where you can acquire coding skills through effective private trainings and personified learning experiences that are designed to make you the next Code Geeks in Nigeria"
        />
        <meta
          name="keywords"
          content="IT schools in Lagos, coding schools in Lagos, coding schools in Ngeria, software development training, web development training, mobile app development training, mobile app development, Code geeks 9ja, code expert in Nigeria, code geeks naija"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
      {/* <script
        type="text/javascript"
        src="https://unpkg.com/xlsx@0.15.1/dist/xlsx.full.min.js"
      ></script> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    </Html>
  );
}
