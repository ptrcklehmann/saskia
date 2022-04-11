import React from 'react'

import Container from './container'
import * as styles from './expertise.module.css'


const Expertise=({content}) => {
    if(!content) return null
    if(!Array.isArray(content)) return null

    return (
        <Container>
            <ul className={styles.expertiseList}>
                {content.map((text) => {
                    return (
                        <li key={text.expertiseText?.childMarkdownRemark?.id} className={styles.expertiseItem}>
                            <h1 className={styles.title}>{text.expertiseTitle}</h1>
                            <div
                                dangerouslySetInnerHTML={{__html: text.expertiseText?.childMarkdownRemark?.html}}
                                className={styles.body} />
                            <ul className={styles.expertiseList}>
                                {text.subExpertise&&text.subExpertise.map((subExpertise) => {
                                    return (
                                    <li key={subExpertise.subExpertiseTitle}className={styles.subExpertiseItem}>
                                        <h1 className={styles.subtitle}>{subExpertise.subExpertiseTitle}</h1>
                                        <div
                                            dangerouslySetInnerHTML={{__html: subExpertise.subExpertiseText?.childMarkdownRemark?.html}}
                                            className={styles.body} />
                                    </li>)
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
}

export default Expertise
