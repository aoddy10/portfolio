/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //     remotePatterns: [
  //         {
  //             protocol: 'http',
  //             hostname: 'images.unsplash.com"'
  //         }
  //     ]
  // },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
