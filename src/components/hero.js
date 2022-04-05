import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Parallax } from 'react-scroll-parallax';

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => {
  return (
  <div className={styles.hero}>
    <Parallax translateX={[0, 100]}  speed={-20}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    </Parallax>
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
)}

export default Hero
