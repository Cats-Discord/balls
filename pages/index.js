import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.wrapper}>
        <Head>
            <title>BALLS</title>
        </Head>
                <h1 className={styles.wxxvhs} data-text="BALLS RECORDS">BALLS RECORDS</h1>
                <ul className={styles.centerme}>
                    <Link href="/discography"><span className={styles.subtext} data-text="artists">artists</span></Link>
                    <Link href="/about"><span className={styles.subtext} data-text="artists">about</span></Link>
                    <Link href="https://github.com/cats-discord/balls/"><span className={styles.subtext} data-text="artists">tour</span></Link>
                </ul>
                <h5 className={styles.centerme}>brought to you by the cats collective</h5>
        </div>
    )
}
