module.exports = {
  siteMetadata: {
    title: `Saga of the Old Gods`,
    description: `Brie's story, as she learns the secrets of her past and the influence of the Old Gods on the world.`,
    author: `KJ Sylva`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "chapters",
        path: `${__dirname}/chapters`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
  ],
}
