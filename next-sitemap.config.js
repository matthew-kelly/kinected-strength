/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${process.env.NEXT_PUBLIC_SITE_PROTOCOL}${process.env.NEXT_PUBLIC_SITE_URL}`,
  changefreq: "daily",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  exclude: ["/404"],
};
