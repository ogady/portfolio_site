require('dotenv').config()
const querystring = require('querystring')
const path = require('path')

const siteMetadata = {
  title: "Takumi Ogawa - @ogady",
  author: "Takumi Ogawa",
  description: "ogady's portfolio site",
  siteUrl: 'https://ogady.github.io/portfolio_site/',
  siteLanguage: 'ja',
  shortName: 'ogady',
  skills: [
    { type: 'Go', level: 80 },
    { type: 'Python', level: 50 },
    { type: 'Django', level: 50 },
    { type: 'TypeScript', level: 40 },
    { type: 'Java', level: 30 },
    { type: 'PostgresDB', level: 60 },
    { type: 'MySQL', level: 50 },
    { type: 'Docker', level: 50 },
    { type: 'AWS', level: 70 },
  ],
  user: {
    name: 'Takumi Ogawa',
    github: 'ogady',
    qiita: 'ogady',
    speaker_deck: 'ogady',
    twitter: 'gadyma',
    facebook: 'takumi.ogawa.37266',
    linkedin: 'takumi-ogawa-869046195'
  },
  github: {
    topic: 'my-portfolio'
  },
}


module.exports = {
  siteMetadata,
  pathPrefix: `/`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: '/',
        background_color: '#4173B3',
        theme_color: '#4173B3',
        display: 'minimal-ui',
        icon: 'src/assets/images/ogady_pro.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname,`contents`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
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
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            }
          }
          // `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-source-qiita`,
      options: {
        accessToken: process.env.QIITA_API_TOKEN,
        userName: siteMetadata.user.qiita,
        fetchPrivate: false,
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_API_TOKEN,
        graphQLQuery: `
        query ($q: String="", $nFirst: Int=0) {
          allGithubData: search(query: $q, type: REPOSITORY, first: $nFirst) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  url
                }
              }
            }
          }
        }
        `,
        variables: {
          q: `topic:${siteMetadata.github.topic} user:${siteMetadata.user.github}`,
          nFirst: 10
        }
      }
    },
    `gatsby-plugin-typescript`
  ],
}
