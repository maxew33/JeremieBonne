/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.aboutContainer}>
                    <Image
                        src="/assets/img/Jeremie-bonne.png"
                        alt="Jérémmie Bonne"
                        width={634}
                        height={634}
                        className={styles.image}
                    />
                <div class={styles.aboutContent}>
                    <h2 class={styles.aboutHook}>
                        Je suis Jérémie Bonne, graphiste bordelais quadragénaire
                        et amoureux de la lettre sous toutes ses formes.
                    </h2>
                    <p>
                        J'ai travaillé dans la publicité durant une douzaine
                        d'années et puis peu à peu, j'ai réalisé que ce qui
                        m'avait poussé à me diriger vers la création était
                        totalement absent de mon quotidien.
                    </p>
                    <p>
                        Depuis, j'ai fortement redirigé ma carrière vers le logo
                        et le lettrage en règle générale et je dessine !
                    </p>
                    <p>
                        Je mets d'ailleurs un point d'honneur à fournir à mes
                        clients un travail original fait à la main, avec comme
                        outil du papier et un crayon. Le travail numérique
                        n'intervient que dans un second temps.
                    </p>
                    <p>
                        Je veux faire un travail artisanal pour des clients qui
                        aiment ce qu'ils font et veulent le faire bien.
                    </p>
                    <p>
                        Je suis également professeur de typographie à l'ECV
                        Bordeaux où j'essaie de transmettre aux jeunes
                        générations ma passion pour les lettres et le pouvoir de
                        communication qu'elles recèlent !
                    </p>
                </div>
            </div>
        </section>
    )
}
