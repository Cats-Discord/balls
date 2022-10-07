import Head from 'next/head';
import styles from '../styles/Art.module.css';
import Script from 'next/script';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>artist / BALLSRECORDS</title>
        <link rel="icon" href="https://cdn.discordapp.com/emojis/849891216525885460.gif" type="image/gif" ></link>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balls.catfile.me" />
        <meta property="og:title" content="BALLS Record Label" />
        <meta property="og:description" content="the best record label ever (no contest)" />
        <meta property="og:image" content="https://cats-discord.github.io/balls21/static/fastmerging.gif" />
        <meta name="theme-color" content="#ff0066"></meta>
      </Head>
      <main className={styles.backdrop}>{children}</main>
    </>
  );
}