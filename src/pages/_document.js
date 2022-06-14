import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display='optional'"
        />
        <link rel="icon" href="/images/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16*16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32*32.png" />
        <link rel="apple-touch-icon" sizes="180*180" href="/images/favicons/apple-touch-icon.png" />
        {/* <link
          rel="android-touch-icon"
          sizes="192*192"
          href="/images/favicons/android-chrome-192x192.png"
        />
        <link
          rel="android-touch-icon"
          sizes="512*512"
          href="/images/favicons/android-chrome-512x512.png"
        /> */}
        <meta name="theme-color" content="#b52082" /> {/* For mobile */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
