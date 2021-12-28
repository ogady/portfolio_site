require('dotenv').config()
const querystring = require('querystring')
const path = require('path')

const siteMetadata = {
  title: 'Takumi Ogawa - @ogady',
  author: 'Takumi Ogawa',
  description: "ogady's portfolio site",
  siteUrl: 'https://ogady.github.io',
  siteLanguage: 'ja',
  shortName: "ogady's site",
  skills: [
    { type: 'Go', level: 80 },
    { type: 'Python', level: 60 },
    { type: 'TypeScript', level: 60 },
    { type: 'PHP', level: 40 },
    { type: 'PostgreSQL', level: 60 },
    { type: 'MySQL', level: 50 },
    { type: 'Docker', level: 70 },
    { type: 'AWS', level: 70 },
    { type: 'Terraform', level: 80 },
  ],
  user: {
    name: 'Takumi Ogawa',
    github: 'ogady',
    qiita: 'ogady',
    speaker_deck: 'takumiogawa',
    twitter: '_ogady_',
    facebook: 'takumi.ogawa.37266',
    linkedin: 'takumi-ogawa-869046195',
  },
  github: {
    topic: 'my-portfolio',
  },
  speaker_deck: {
    slides_count: '6'
  }
}

const qs = querystring.stringify({
  rss_url: `https://speakerdeck.com/${siteMetadata.user.speaker_deck}.atom`,
  count: siteMetadata.speaker_deck.slides_count,
  api_key: process.env.RSS2JSON_API_TOKEN
})

module.exports = {
  siteMetadata,
  pathPrefix: `/portfolio_site`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: '/portfolio_site/',
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
        path: path.join(__dirname, `contents`),
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
              maxWidth: 500,
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
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
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
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: `https://api.rss2json.com/v1/api.json?${qs}`,
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        name: 'Slides'
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.READ_GITHUB_API_TOKEN,
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
          nFirst: 10,
        },
      },
    },
    `gatsby-plugin-typescript`,
  ],
}
