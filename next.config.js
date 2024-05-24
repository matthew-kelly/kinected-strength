/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: `/images/${process.env.NEXT_PUBLIC_SANITY_API_PROJECT_ID}/**`,
      },
    ],
    deviceSizes: [448, 512, 640, 750, 828, 1080, 1200, 1440], //1600, 1920 2048, 3840
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 432],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        source: "/api/revalidate",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.SANITY_SITE_URL,
          },
        ],
      },
    ];
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")();
module.exports =
  process.env.ANALYZE === "true" ? withBundleAnalyzer(nextConfig) : nextConfig;
// module.exports = nextConfig;
