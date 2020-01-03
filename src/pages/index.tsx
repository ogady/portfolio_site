import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SkillBars from '../components/SkillBars'
import QiitaItems, { Post as QiitaPost } from '../components/QiitaItems'
import Header from '../components/Header'
import GitHubRepos, { Repo } from '../components/GitHubRepos'
import Head from '../components/Head'
import Career from '../components/Career'

type User = {
  name: string
  github: string
  twitter: string
  qiita: string
  speaker_deck: string
  facebook: string
  linkedin: string
}

type Skill = {
  type: string
  level: number
}

type HomeIndexProps = {
  data: {
    allQiitaPost: {
      edges: QiitaPost[]
    }
    allGithubData: {
      edges: [
        {
          node: {
            data: {
              allGithubData: {
                edges: Repo[]
              }
            }
          }
        }
      ]
    }
    site: {
      siteMetadata: {
        user: User
        skills: Skill[]
        blog: {
          url: string
        }
      }
    }
  }
}

const HomeIndex: React.FC<HomeIndexProps> = ({ data }) => {
  const qiitaPosts = data.allQiitaPost.edges
  const repos = data.allGithubData.edges[0].node.data.allGithubData.edges
  const { user, skills, blog } = data.site.siteMetadata

  return (
    <Layout>
      <Head />
      <Header user={user} />
      <div id="main">
        <h1>About</h1>
        <SkillBars backgroundColor="#4173B3" skills={skills} />
        <Career />
        {repos && repos.length > 0 && (
          <GitHubRepos repos={repos} user={user.github} />
        )}
        {qiitaPosts && qiitaPosts.length > 0 && (
          <QiitaItems posts={qiitaPosts} user={user.qiita} />
        )}
      </div>
    </Layout>
  )
}

export default HomeIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        skills {
          type
          level
        }
        blog {
          url
        }
        user {
          name
          github
          qiita
          twitter
          facebook
          linkedin
        }
      }
    }
    allQiitaPost {
      edges {
        node {
          id
          title
          url
          created_at
        }
      }
    }
    allGithubData {
      edges {
        node {
          data {
            allGithubData {
              edges {
                node {
                  id
                  name
                  description
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
