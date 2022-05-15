require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Erica Rabinovich`,
    description: `Erica Rabinovich's personal website`,
    author: `Erica Rabinovich`,
    siteUrl: `http://ericarabinovich.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `eb8v2p8rmccx`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: "Open Sans",
              axes: "wght@400;700",
            },
            {
              family: "Slabo 13px",
              axes: "wght@400;700",
            },
          ],
        },
      },
    },
  ],
}
