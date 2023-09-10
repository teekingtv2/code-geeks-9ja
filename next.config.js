/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.pexels.com',
      'pixabay.com',
      'cdn.pixabay.com',
      'jaflah.com',
      'codegeeks9ja.com',
      'img.freepik.com',
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
