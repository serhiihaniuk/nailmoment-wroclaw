import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async rewrites() {
    return [
      {
        source: "/content/2026/3days.png",
        destination:
          "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/assets/v1/nailmoment-wroclaw/content/2026/3days.png",
      },
    ];
  },
  images: {
    remotePatterns: [
      new URL("https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/**"),
      new URL("https://hodpa6ifpplv4yxb.public.blob.vercel-storage.com/**"),
    ],
    deviceSizes: [640, 1080],
    minimumCacheTTL: 2678400, // 31 days
  },
};

export default nextConfig;
