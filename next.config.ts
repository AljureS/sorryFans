import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.getcrowder.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
