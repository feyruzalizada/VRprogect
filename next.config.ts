import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/stream/:file*.m4s",
        headers: [
          { key: "Content-Type", value: "video/iso.segment" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/stream/:file*.m3u8",
        headers: [
          { key: "Content-Type", value: "application/vnd.apple.mpegurl" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/stream/:file*.mp4",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
