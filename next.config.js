/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://json-api-main-delta.vercel.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
