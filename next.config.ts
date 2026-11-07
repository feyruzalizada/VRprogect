import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const primaryHost = "www.millistandart.az";

// every other domain of the project lands on the primary one
const aliasHosts = [
  "millistandart.az",
  "vrproject.az",
  "www.vrproject.az",
  "vrstandart.az",
  "www.vrstandart.az",
  "vr-project-umber.vercel.app",
];

const nextConfig: NextConfig = {
  async redirects() {
    return aliasHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `https://${primaryHost}/:path*`,
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.public.blob.vercel-storage.com" }],
  },
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
        // book pages and covers never change under the same name
        source: "/kitab/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
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

export default withPayload(nextConfig);
