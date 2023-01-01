/** @type {import('next-sitemap').IConfig} */

const domain = "https://www.hautelogic.net/";
module.exports = {
  siteUrl: "https://www.hautelogic.net/",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  priority: 1,
  sitemapBaseFileName: "static-sitemap",
  // ...other options
  exclude: [
    "/server-sitemap.xml",
    "/apparel-management2",
    "/blog-content",
    "/thankyou",
    "/Webinar",
  ],

  transform: async (config, path) => {
    // console.log(path);
    if (path === "/") {
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: "1",
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    } else {
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: "0.9",
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "SumrushBot-SA",
      },
    ],
    additionalSitemaps: [`${domain}sitemap.xml`],
  },
};
