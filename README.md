# Gatsby Theme Jumpalottahigh Blog

See the [live demo](https://gatsby-theme-jumpalottahigh-blog.netlify.com)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    yarn add gatsby-theme-jumpalottahigh-blog
    # OR:
    # npm install --save gatsby-theme-jumpalottahigh-blog
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: ['gatsby-theme-jumpalottahigh-blog']
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Customization

You can shadow any component from the theme and overwrite it as much as you like.
Here's the main parts you might want to customize:

1. The `siteMetadata` key in gatsby-config.js and the `config` constant in the same file (TODO:explain further with examples)
2. Add a default OG image in `static` called `default-ogimage.png`
