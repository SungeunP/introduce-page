import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Didot/Didot.woff"
          as="font"
          crossOrigin=""
        />
        {/* <link
          rel="preload"
          href="/fonts/DidotBold/DidotLTStd-Bold.woff"
          as="font"
          crossOrigin=""
        /> */}
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
