/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["k.kakaocdn.net", "phinf.pstatic.net"],
  },
};

module.exports = nextConfig;
