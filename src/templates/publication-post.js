import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

class PublicationPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    return (
      <Layout location={this.props.location}>
        <Seo
          title={'Publication'}
          description={post.body.childMarkdownRemark.excerpt}
        />
        <div className={styles.container}>
          <span className={styles.meta}>
            {post.author?.name} &middot;{' '}
          </span>
          <div className={styles.article}>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: post.body?.childMarkdownRemark?.html,
              }}
            />
            <Tags tags={post.tags} />
            {/* {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )} */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default PublicationPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug {
    contentfulBlogPost {
      slug
      author {
        name
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`
