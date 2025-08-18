import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `http://localhost:5001/api/auth/:path*`,
      },
      {
        source: "/api/v1/:path*",
        destination: `http://localhost:5001/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
