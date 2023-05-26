/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["k.kakaocdn.net"],
  },
};

module.exports = nextConfig;
