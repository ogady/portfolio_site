import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import QiitaItems, { Post as QiitaPost } from '../components/abouts/QiitaItems'
import Header from '../components/Header'
import GitHubRepos, { Repo } from '../components/abouts/GitHubRepos'
import Head from '../components/Head'
import Career from '../components/abouts/Career'
import Certification from '../components/abouts/Certification'
import Skills from '../components/abouts/Skills'
import TechBlog from '../components/abouts/TechBlog'
import Slides, { Item as SlideItem } from '../components/abouts/Slides'
import Works from '../components/abouts/Works'

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
    allSlides: {
      edges: [
        {
          node: {
            items: SlideItem[]
          }
        }
      ]
    }
    site: {
      siteMetadata: {
        user: User
        skills: Skill[]
      }
    }
  }
}

const HomeIndex: React.FC<HomeIndexProps> = ({ data }) => {
  const qiitaPosts = data.allQiitaPost.edges
  const repos = data.allGithubData.edges[0].node.data.allGithubData.edges
  const { user } = data.site.siteMetadata
  const slides = data.allSlides.edges[0].node.items.filter(function (item, index) {
    return (index <= 4);
  });

  return (
    <Layout>
      <Head />
      <Header user={user} />
      <div id="main">
        <h1>About</h1>
        <Skills />
        <Career />
        {repos && repos.length > 0 && (
          <GitHubRepos repos={repos} user={user.github} />
        )}
        <Certification />
        {slides && slides.length > 0 && (
          <Slides items={slides} user={user.speaker_deck} />
        )}
        <TechBlog />
        {qiitaPosts && qiitaPosts.length > 0 && (
          <QiitaItems posts={qiitaPosts} user={user.qiita} />
        )}
        <Works />
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
        user {
          name
          github
          qiita
          twitter
          facebook
          speaker_deck
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
    allSlides(filter: { items: { elemMatch: { title: { ne: null } } } }) {
      edges {
        node {
          items {
            guid
            title
            link
            thumbnail
            pubDate
          }
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
