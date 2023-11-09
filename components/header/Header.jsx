import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image
                    src="/assets/img/logo.png"
                    width={480}
                    height={100}
                    alt="logo Jérémie Bonne"
                />
            </Link>
            <div className={styles.baseline}>
                <span className="txt">communication</span>
                <span className="txt">lettering</span>
                <span className="txt">identité visuelle</span>
            </div>
            <nav className={styles.navigation}>
                <Link href="/">galerie</Link>
                <Link href="/about">à propos</Link>
                <Link href="/contact">contact</Link>
            </nav>
        </header>
    )
}
