import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const Expertise = ({ content }) => {
  if (!content) return null
  if (!Array.isArray(content)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {content.map((text) => {
          return (
            <li key={text.slug}>
              <Link to={`/blog/${text.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={text.heroImage.gatsbyImageData} />
                <h2 className={styles.title}>{text.title}</h2>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: text.description.childMarkdownRemark.html,
                }}
              />
              <div className={styles.meta}>
                <small className="meta">{text.publishDate}</small>
                <Tags tags={text.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Expertise
