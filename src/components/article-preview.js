import React from 'react'
import {Link} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview=({publications}) => {
  if(!publications) return null
  if(!Array.isArray(publications)) return null

  return (
    <section className="relative">
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-12 md:pt-20">
        <h1 className={styles.title} data-aos="zoom-y-out">Publications</h1>
          <ul className={styles.articleList}>
            {publications.map((post) => {
              return (
                <li key={post.slug}>
                  <Link to={`/publication/${post.slug}`} className={styles.link}>
                    <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                    <h2 className={styles.title}>{post.title}</h2>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.description.childMarkdownRemark.html,
                    }}
                  />
                  <div className={styles.meta}>
                    <small className="meta">{post.publishDate}</small>
                    <Tags tags={post.tags} />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ArticlePreview
