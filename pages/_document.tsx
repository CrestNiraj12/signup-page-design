import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default function Document(props: DocumentProps) {
  const currentLocale = props.__NEXT_DATA__.locale;

  return (
    <Html lang={currentLocale}>
      <Head />
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
