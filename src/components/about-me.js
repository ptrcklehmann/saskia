import React from 'react'

import Container from './container'
import * as styles from './about-me.module.css'

const AboutMe=({content}) => {
    if(!content) return null
    if(!Array.isArray(content)) return null
    return (
        <Container>
            <article className={styles.aboutMe}>
                {content.map((text) => {
                    return (
                        <>
                            <h1 className={styles.title}>{text.aboutMeTitle}</h1>
                            <div
                                dangerouslySetInnerHTML={{__html: text.aboutMeText?.childMarkdownRemark?.html}}
                                className={styles.body} />
                        </>
                    )
                })}
            </article>
        </Container>
    )
}

export default AboutMe
