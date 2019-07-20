const config = {
  siteProductionUrl: `https://blog.georgi-yanev.com`,
}

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
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
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/posts`,
    //     name: 'posts',
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/pages`,
        name: `images`,
      },
    },
  ],
}
