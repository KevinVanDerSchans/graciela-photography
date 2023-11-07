import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

      <Script src="../dist/js/lightbox-plus-jquery.min.js" defer></Script>

      <Script src="../bower_components/jquery/dist/jquery.js" defer></Script>
      <Script src="../src/js/lightbox.js" defer></Script>

        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        <title>Graciela Photography</title>

      </Head>

      <body data-theme="light" data-menu="fixed" data-footer-effect="on" data-footer-corners="on">
        <Main />
        <NextScript />

      </body>
    </Html>

  );
};
