/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["car-web-api.vercel.app"],
  },
};

module.exports = nextConfig;
