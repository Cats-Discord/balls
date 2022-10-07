import Head from 'next/head';
import styles from '../styles/Art.module.css';
import Script from 'next/script';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>artist / BALLSRECORDS</title>
      </Head>
      <main className={styles.backdrop}>{children}</main>
    </>
  );
}