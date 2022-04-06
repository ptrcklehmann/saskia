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
                        <li key={text.expertiseTitle} className={styles.expertiseItem}>
                            <h1 className={styles.title}>{text.expertiseTitle}</h1>
                            <div
                            dangerouslySetInnerHTML={{__html:text.expertiseText?.childMarkdownRemark?.html}}
                            />
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
}

export default Expertise
