/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.algostack.co',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*', '/login'],
  additionalPaths: async (config) => {
    const staticPages = ['/', '/about', '/services', '/contact'];
    return staticPages.map((page) => config.transform(config, page));
  },
};
