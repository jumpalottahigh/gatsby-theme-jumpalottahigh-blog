const path = require('path')

module.exports = ({
  contentPath = 'content/posts',
  assetsPath = 'content/assets',
  basePath = '/',
}) => {
  const config = {
    siteProductionUrl: `https://blog.georgi-yanev.com`,
    siteName: `Georgi Yanev Blog`,
    siteShortName: `Georgi Blog`,
    backgroundColor: '#f7f0eb',
    themeColor: '#0275d8',
  }

  return {
    pathPrefix: `/`,
    siteMetadata: {
      siteUrl: config.siteProductionUrl,
      title:
        'Georgi Yanev | Blog about web development, fpv racing drones, learning and life stories',
      metaDescription:
        "Hi, I'm Georgi and I build things on the web with JavaScript and React. In this blog you will find posts about 🚁 FPV racing drones (building, repairing and flying), 💻 web development, 🏠 smart home automation, 👨‍🎓️ life-long learning, goals and stories as well as who knows what else in the future. I write code, solve problems and sometimes stream on twitch. I love flying FPV drones, 3D printing, contributing to open source, and working on fpvtips.com.",
      keywords:
        'javascript, JavaScript, React, Gatsby, open source, fpv racing drone, build guide, tools, drone backpack, gear, drone gear, videos, hd drone footage, 3D printing, solving problems, projects, coding, learning to code, year in review, improving, getting better, become a programmer, fly fpv, fly drones, growth, smart home automation, home assistant, open source software, OSS, FPV, racing quads, Wizard x220, code, DIY, projects, life-long learning, learning, teaching, education, web development',
      ogImage: `${config.siteProductionUrl}/static/default-ogimage.png`,
      ogUrl: config.siteProductionUrl,
      ogTitle:
        'Georgi Yanev | Blog about web development, fpv racing drones, learning and life stories',
      ogDescription:
        "Hi, I'm Georgi and I build things on the web with JavaScript and React. In this blog you will find posts about 🚁 FPV racing drones (building, repairing and flying), 💻 web development, 🏠 smart home automation, 👨‍🎓️ life-long learning, goals and stories as well as who knows what else in the future. I write code, solve problems and sometimes stream on twitch. I love flying FPV drones, 3D printing, contributing to open source, and working on fpvtips.com.",
    },
    plugins: [
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 920,
                withWebp: true,
                quality: 75,
                // Remove the default behavior of adding a link to each
                // image.
                linkImagesToOriginal: true,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                aliases: {
                  sh: 'shell',
                  es6: 'javascript',
                  env: 'bash',
                  mdx: 'md',
                },
              },
            },
            `gatsby-remark-external-links`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-smartypants`,
            `@weknow/gatsby-remark-twitter`,
          ],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.resolve(contentPath),
          name: 'posts',
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.resolve(assetsPath),
          name: 'assets',
        },
      },
      {
        // If you’re using this plugin together with gatsby-plugin-offline (recommended),
        // this plugin should be listed before the offline plugin so that it can cache the created manifest.json.
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: config.siteName,
          short_name: config.siteShortName,
          start_url: '/',
          background_color: config.backgroundColor,
          theme_color: config.themeColor,
          display: 'minimal-ui',
          icons: [
            {
              src: `/logo.png`,
              sizes: `512x512`,
              type: `image/png`,
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: `UA-XXXXXX-X`,
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`),
        },
      },
      `gatsby-plugin-sitemap`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-netlify`,
      `gatsby-plugin-offline`,
    ],
  }
}
