import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Parallax} from 'react-scroll-parallax';
import Sticky from 'react-stickynode';
import Logo from './logo'
import CurvedLine from './curved-line'
import * as styles from './hero.module.css'

const Hero=({image,title,content}) => {
  return (
    <div className={styles.hero}>
      <Sticky innerZ={4} className={styles.details} activeClass={styles.active} innerClass={styles.stickyInnerWrapper}>
          {/* <span className={styles.logo} /> */}
          <Logo className={styles.logo}/>
          <h1 className={styles.title}>{title}</h1>
          {content&&<p className={styles.content}>{content}</p>}
      </Sticky>
      <Parallax translateX={[-0,50]} speed={0}>
        {image&&(
          <GatsbyImage className={styles.image} alt={title} image={image} />
        )}
      </Parallax>

    </div>

  )
}

export default Hero
