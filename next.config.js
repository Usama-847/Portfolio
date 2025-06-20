/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Export static HTML files
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required when using static export
  },
};

module.exports = nextConfig;
