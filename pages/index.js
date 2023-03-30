import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Countdown from '../components/countdown';

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>BALLS</title>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://balls.catfile.me" />
                <meta property="og:title" content="BALLS Record Label" />
                <meta property="og:description" content="the best record label ever (no contest)" />
                <meta property="og:image" content="/static/fastmerging.gif" />
                <meta name="theme-color" content="#ff0066"></meta>
            </Head>
            <main>
                <Countdown class={styles.cd} />
                <Countdown class={styles.cdb} />
                <h1 className={styles.wxxvhs} data-text="BALLS RECORDS">BALLS RECORDS</h1>
                <ul className={styles.centerme}>
                    <Link href="/discography"><span className={styles.subtext} data-text="artists">artists</span></Link>
                    <Link href="/about"><span className={styles.subtext} data-text="artists">about</span></Link>
                    <Link href="https://github.com/cats-discord/balls/"><span className={styles.subtext} data-text="artists">tour</span></Link>
                </ul>
                <h5 className={styles.centerme}>brought to you by the cats collective</h5>
            </main>     
        </div>
    );
}
