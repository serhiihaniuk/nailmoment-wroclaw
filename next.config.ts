import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/**"),
    ],
    deviceSizes: [640, 1080],
    minimumCacheTTL: 2678400, // 31 days
  },
};

export default nextConfig;
