import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Script from 'next/script';
import Countdown from '../components/countdown';

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>BALLS</title>
            </Head>
            <main>
                <p id="cd" className={styles.cd}><Script type="text/javascript" src="/static/countdown.js"></Script></p>
                
                <Countdown />
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
