import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footerTop}>
                <Link href="https://www.facebook.com/profile.php?id=100078457226241">
                    facebook
                </Link>
                <Link href="https://www.behance.net/tipopo">behance</Link>
                <Link href="https://www.instagram.com/jeremiebonne/">
                    instagram
                </Link>
            </nav>
            <p className={styles.footerBottom}>
                <Link href="https://www.maxime-malfilatre.com">
                    site crée par Maxime Malfilâtre
                </Link>
                <br />
                copyright jérémie hassoun 2022 | tous droits résérvés
            </p>
        </footer>
    )
}
