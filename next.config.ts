import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'avatar.vercel.sh',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ]
  }
};

export default nextConfig;
