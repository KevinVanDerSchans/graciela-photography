import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Graciela photography" />
        <meta name="author" content="Kevin van der Schans Delgado" />
        <meta name="language" content="en" />
        <meta name="keywords" content="Photography, fotografía, Málaga" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Graciela Photography</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
      </Head>

      <body data-theme="light" data-menu="fixed" data-footer-effect="on" data-footer-corners="on">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
