import React from 'react'

import Container from './container'
import * as styles from './expertise.module.css'

const Expertise=({content}) => {
    if(!content) return null
    if(!Array.isArray(content)) return null

    return (
        <section className="relative">
            <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
                <div className="pt-12 md:pt-20">
                    <ul className={styles.expertiseList}>
                        {content.map((text) => {
                            return (
                                <li key={text.expertiseText?.childMarkdownRemark?.id} className={styles.expertiseItem}>
                                    <div className="max-w-3xl pb-12 mr-auto md:pb-16">
                                        <h1 className={styles.title} data-aos="zoom-y-out">{text.expertiseTitle}</h1>
                                    </div>
                                    <div
                                        dangerouslySetInnerHTML={{__html: text.expertiseText?.childMarkdownRemark?.html}}
                                        className={styles.body}
                                        data-aos="zoom-y-out" />
                                    <ul className={styles.expertiseList}>
                                        {text.subExpertise&&text.subExpertise.map((subExpertise) => {
                                            return (
                                                <li key={subExpertise.subExpertiseTitle} className={styles.subExpertiseItem}>
                                                    <div className="max-w-3xl pb-3 mr-auto md:pb-6">
                                                    <h1 className={styles.subtitle} data-aos="zoom-y-out">{subExpertise.subExpertiseTitle}</h1>
                                                    </div>
                                                    <div
                                                        dangerouslySetInnerHTML={{__html: subExpertise.subExpertiseText?.childMarkdownRemark?.html}}
                                                        className={styles.body}
                                                        data-aos="zoom-y-out" />
                                                </li>)
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Expertise
