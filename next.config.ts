import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only apply no-cache to HTML pages, not static assets
  async headers() {
    return [
      {
        source: '/((?!_next|favicon).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
