const path = require('path')
const config = require('./config.js')

module.exports = ({
  contentPath = 'content/posts',
  assetsPath = 'content/assets',
  basePath = '/',
}) => {
  return {
    pathPrefix: `/`,
    siteMetadata: {
      siteUrl: config.siteProductionUrl,
      title: config.siteMetadata.title,
      metaDescription: config.siteMetadata.metaDescription,
      keywords: config.siteMetadata.keywords,
      ogImage: `${config.siteProductionUrl}/static/default-ogimage.png`,
      ogUrl: config.siteProductionUrl,
      ogTitle: config.siteMetadata.ogTitle,
      ogDescription: config.siteMetadata.ogDescription,
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
          trackingId: config.googleAnalyticsId,
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
