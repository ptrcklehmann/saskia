import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Expertise from '../components/expertise'
import AboutMe from '../components/about-me'

class RootIndex extends React.Component {
  render() {
    const publications=get(this,'props.data.allContentfulBlogPost.nodes')
    const [author]=get(this,'props.data.allContentfulPerson.nodes')
    const expertise=get(this,'props.data.allContentfulExpertise.nodes')
    const about=get(this,'props.data.allContentfulAbout.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          image={author.heroImage.gatsbyImageData}
          title={author.name}
          content={author.shortBio.shortBio}
        />
        <AboutMe content={about} />
        <Expertise content={expertise} />
        <ArticlePreview publications={publications} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery=graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson (
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
    allContentfulAbout {
    nodes {
      aboutMeTitle
      aboutMeText {
        childMarkdownRemark {
          html
        }
      }
      node_locale
    }
  }
  allContentfulExpertise(sort: {fields: orderNumber}) {
    nodes {
      expertiseTitle
      expertiseText {
        childMarkdownRemark {
          html
        }
      }
      subExpertise {
        subExpertiseTitle
        subExpertiseText {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    }
  }
`
