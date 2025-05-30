import { env } from "@/config/env";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/shared/styles")],
  },
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
        source: "/api/:path*",
        destination: `${env.API_URL}/:path*`,
      },
    ];

    return {
      beforeFiles: rewrites,
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
