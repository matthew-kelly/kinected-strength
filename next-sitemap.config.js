/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${process.env.NEXT_PUBLIC_SITE_PROTOCOL}${process.env.NEXT_PUBLIC_SITE_URL}`,
  changefreq: "daily",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: true,
  exclude: ["/404"],
};
