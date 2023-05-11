/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  env: {
    NEXTAUTH_SECRET: "khwanchai bomb",
    NEXT_API: "https://academic.pcru.ac.th/api-apps-sgms",
  },
};

module.exports = nextConfig;
