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

module.exports = nextConfig;
