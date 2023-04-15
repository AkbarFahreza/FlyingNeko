import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://pbs.twimg.com/profile_images/1611011443721383938/l_ME_3Ps_400x400.jpg"
        />
        <title>Fahreza</title>
        <meta property="og:title" content="Fahreza's Portfolio Website" />
        <meta
          property="og:description"
          content="Ini adalah website portfolio yang saya buat karena kenapa tidak"
        />
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1611011443721383938/l_ME_3Ps_400x400.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
