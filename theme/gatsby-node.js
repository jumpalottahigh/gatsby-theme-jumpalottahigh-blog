const path = require('path')
const fs = require('fs')

const PostTemplate = require.resolve(`./src/templates/blog-post.js`)

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  // todo configure it to themeoption
  const contentPath = themeOptions.contentPath || 'content/posts'
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

/**
 * When shipping NPM modules, they typically need to be either
 * pre-compiled or the user needs to add bundler config to process the
 * files. Gatsby lets us ship the bundler config *with* the theme, so
 * we never need a lib-side build step.  Since we dont pre-compile the
 * theme, this is how we let webpack know how to process files.
 */
exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(
            require.resolve('gatsby-theme-jumpalottahigh-blog')
          ),
          use: [loaders.js()],
        },
      ],
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/content/posts/" }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Failed to create pages for the posts', result.errors)
  }

  let posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node: post }) => {
    createPage({
      path: post.frontmatter.path,
      component: require.resolve(PostTemplate),
      context: {
        slug: post.frontmatter.path,
      },
    })
  })
}
