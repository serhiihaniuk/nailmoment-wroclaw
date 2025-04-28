import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/**"),
    ],
  },
};

export default nextConfig;
