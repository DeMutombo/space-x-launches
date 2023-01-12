/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "i.imgur.com", "imgur.com"], // <== Domain name
  },
};

module.exports = nextConfig;
