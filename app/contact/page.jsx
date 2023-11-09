/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from './Contact.module.css'
import Link from 'next/link'

export default function Contact() {
    return (
        <main>
            <section className={styles.contact}>
                <h2 className={styles.hook}>Discutons-en !</h2>
                <p>
                    Si vous voulez me parler d'un projet, d'une collaboration,
                    <br /> ou si vous avez juste une question, je serai ravi
                    d'en discuter avec vous.
                </p>
                <Link
                    href="mailto:contact@jeremie-bonne.fr"
                    className={styles.contactWay}
                >
                    contact@jeremie-bonne.fr
                </Link>
                <div className={styles.contactWay}>+336 74 03 48 24</div>
            </section>
        </main>
    )
}
