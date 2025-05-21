import { env } from "@/config/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: env.API_HOSTNAME,
      },
    ],
  },

  async redirects() {
    return [];
  },

  async rewrites() {
    const rewrites = [
      {
        source: "/api/auth/:path*",
        destination: "/api/auth/:path*", // оставить внутри Next.js
      },
    ];

    const fallback = [
      {
        source: "/api/:path*",
        destination: `${env.API_URL}/:path*`,
      },
    ];

    return {
      beforeFiles: rewrites,
      afterFiles: [],
      fallback: fallback,
    };
  },
};

export default nextConfig;
