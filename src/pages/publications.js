import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class PublicationsIndex extends React.Component {
  render() {
    const posts=get(this,'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Publications" />
        <Hero title="Publications" />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default PublicationsIndex

export const pageQuery=graphql`
  query BlogIndexQuery {
    allContentfulBlogPost {
      nodes {
        body {
        childMarkdownRemark {
          html
        }
      }
        slug
        tags
      }
    }
  }
`
