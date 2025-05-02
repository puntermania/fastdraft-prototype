/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow both app and pages router to work simultaneously
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;