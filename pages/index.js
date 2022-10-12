import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Script from 'next/script';
import Countdown from '../components/countdown';
import CountdownBot from '../components/countdownBot';

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>BALLS</title>
                <link rel="icon" href="https://cdn.discordapp.com/emojis/849891216525885460.gif" type="image/gif" ></link>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://balls.catfile.me" />
                <meta property="og:title" content="BALLS Record Label" />
                <meta property="og:description" content="the best record label ever (no contest)" />
                <meta property="og:image" content="https://cats-discord.github.io/balls21/static/fastmerging.gif" />
                <meta name="theme-color" content="#ff0066"></meta>
            </Head>
            <main>
                <Countdown />
                <CountdownBot />
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
