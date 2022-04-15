import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Parallax} from 'react-scroll-parallax';
import Logo from './logo'
import * as styles from './hero.module.css'

const Hero=({image,title,content}) => {
  return (
    <section className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg" data-aos="zoom-y-out">
                  <Logo className={styles.logo}/>
                  <h1 className={styles.title} data-aos="zoom-y-out">{title}</h1>
                  {content&&<p className={styles.content} data-aos="zoom-y-out">{content}</p>}
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <Parallax translateX={[-100,100]} speed={0}>
            {image&&(
              <GatsbyImage className={styles.image} alt={title} image={image} />
            )}
          </Parallax></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero
