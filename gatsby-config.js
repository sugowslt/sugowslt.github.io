const blogConfig = require("./blog-config")
const { title, description, author, siteUrl } = blogConfig

module.exports = {
  siteMetadata: {
    title,
    description,
    author,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: "./src/reducers/createStore",
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
          ignoreFunction: true,
        },
        cleanupOnClient: true,
        windowKey: "__PRELOADED_STATE__",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `noto sans kr:300,400,500,700,900`,
          `source code pro:700`,
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-sitemap`,
  ],
}
