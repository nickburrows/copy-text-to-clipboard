const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    titleTemplate: `%s · The Real Hero`,
    siteUrl: `https://csb-6bc4r.netlify.app/`,
    menuLinks: [
      {
        name: `預約活動`,
        link: `/`,
        current: true,
      },
      {
        name: `聖光魔龍`,
        link: `/event/`,
        current: false,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.blue["500"],
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        // useResolveUrlLoader: true,
        sassOptions: {
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassRuleTest: /\.global\.s(a|c)ss$/,
        // useResolveUrlLoader: true,
        sassOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ],
}
