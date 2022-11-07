import Head from "next/head";
import "../styles/global.css";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import nextI18NextConfig from "../next-i18next.config.js";
import ChangeLanguage from "../components/organisms/ChangeLanguage";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChangeLanguage />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
