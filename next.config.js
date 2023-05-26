/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["k.kakaocdn.net", "phinf.pstatic.net"],
  },
};

module.exports = nextConfig;
