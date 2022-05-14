/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  disableExperimentalFeaturesWarning: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
