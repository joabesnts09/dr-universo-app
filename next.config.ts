import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov', // Domínio do site da NASA
      },
      {
        protocol: 'https',
        hostname: 'www.nasa.gov',
      },
    ],
  },
};

export default nextConfig;
