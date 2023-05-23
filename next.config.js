/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  env: {
    NEXTAUTH_SECRET: "khwanchai bomb",
    NEXT_API: "https://academic.pcru.ac.th/api-apps-sgms",
    NEXT_PUBLIC: "http://172.16.23.23:3000",
  },
};

module.exports = nextConfig;
