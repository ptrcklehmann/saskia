import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Parallax } from 'react-scroll-parallax';

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => {
  return (
  <div className={styles.hero}>
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
    <Parallax  translateX={[-20, 50]} speed={-10}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    </Parallax>
  </div>
)}

export default Hero
