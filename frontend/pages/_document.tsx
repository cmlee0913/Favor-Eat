import { GlobalStyle } from "@/action/GlobalStyle";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <GlobalStyle />
      <Head />
      <body style={{ margin: "0" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
