import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{"backgroundColor": "white", "color": "black"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
