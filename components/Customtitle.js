import Head from 'next/head';

export default function Customtitle(props) {
  let pageTitle = ""
  if (props.identifier != "") {
    pageTitle = "artist / " + props.identifier
  } else {
    pageTitle = props.page
  }
  return (
    <Head>
        <title>{pageTitle}</title>
    </Head>
  );
}
