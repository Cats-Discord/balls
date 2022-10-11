import Head from 'next/head';

export default function Customtitle(props) {
  return (
    <Head>
        <title>artist / {props.identifier}</title>
    </Head>
  );
}
