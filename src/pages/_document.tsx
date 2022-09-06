import Document, { Html, Head, Main, NextScript } from "next/document";

class BadgesDocument extends Document {
  override render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Chewy&family=Varela+Round&display=swap"
          />
        </Head>
        <body style={{ overflowY: "scroll" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BadgesDocument;
