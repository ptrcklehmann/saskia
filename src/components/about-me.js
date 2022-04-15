import React from 'react'

import Container from './container'
import * as styles from './about-me.module.css'

const AboutMe=({content}) => {
    if(!content) return null
    if(!Array.isArray(content)) return null
    return (
        <section className="relative">
            <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
                <div className="pt-12 md:pt-20">
                    <article className={styles.aboutMe}>
                        {content.map((text) => {
                            return (
                                <>
                                <div className="max-w-3xl pb-12 mr-auto md:pb-16">
                                    <h1 className={styles.title} data-aos="zoom-y-out">{text.aboutMeTitle}</h1>
                                    </div>
                                    <div
                                        dangerouslySetInnerHTML={{__html: text.aboutMeText?.childMarkdownRemark?.html}}
                                        className={styles.body}
                                        data-aos="zoom-y-out"/>
                                </>
                            )
                        })}
                    </article>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
