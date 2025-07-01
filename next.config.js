/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    middlewarePrefetch: "flexible", // or "strict" depending on your preference
  },
};

module.exports = nextConfig;
