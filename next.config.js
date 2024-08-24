/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com", protocol: "https" },
      { hostname: "avatars.githubusercontent.com", protocol: "https" },
    ],
  },
};

module.exports = nextConfig;
