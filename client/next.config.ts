import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/v1/auth/:path*",
        destination: `http://localhost:5001/api/v1/auth/:path*`,
      },
      {
        source: "/api/v1/:path*",
        destination: `http://localhost:5001/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
