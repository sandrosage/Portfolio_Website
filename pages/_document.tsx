import { Html, Head, Main, NextScript } from "next/document";
import { inter, jetbrainsMono, sourceSerif } from "@/lib/fonts";

export default function Document() {
  return (
    <Html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${sourceSerif.variable}`}
    >
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
