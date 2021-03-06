require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || 'production'}`,
});

const website = require("./config/website");

module.exports = {
  siteMetadata: {
    title: website.title,
    titleTemplate: website.titleTemplate,
    description: website.description,
    siteUrl: website.siteUrl,
    image: website.image,
    author: website.owner,
    twitterUsername: website.twitterUsername,
    facebookAppID: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "config/typography.js",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.short_name,
        start_url: `/?source=pwa`,
        background_color: website.background_color,
        theme_color: website.theme_color,
        display: `standalone`,
        icon: website.icon,
        icon_options: {
          purpose: "any maskable",
        },
        shortcuts: [
          {
            "name": "Proyectos",
            "short_name": "Proyectos",
            "description": "Ve todos los proyectos que he hecho y en los que he trabajo.",
            "url": "/projects?source=pwa",
            "icons": [{ "src": website.shorcutIcon1, "sizes": "192x192" }]
          },
          {
            "name": "Blog",
            "short_name": "Blog",
            "description": "Mira los blogs que he escrito.",
            "url": "/blog?source=pwa",
            "icons": [{ "src": website.shorcutIcon2, "sizes": "192x192" }]
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [`/content/*`],
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    },
  ],
}
