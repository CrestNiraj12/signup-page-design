import { useEffect } from "react";
import Illustration from "../components/organisms/Illustration";
import Header from "../components/organisms/Header";
import SignupForm from "../components/organisms/SignupForm";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { InferGetStaticPropsType } from "next";
import nextI18NextConfig from "../next-i18next.config.js";
import { useRouter } from "next/router";

const Signup = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const handleChangeLanguage = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: locale });
  };

  const changeTo = router.locale === "en" ? "ja" : "en";

  return (
    <>
      <Head>
        <title>Signup Page</title>
      </Head>
      <main className="flex relative">
        <button
          onClick={() => handleChangeLanguage(changeTo)}
          className="absolute right-10 top-10 bg-red-400 rounded px-3 py-2"
        >
          {t("change-locale")}
        </button>

        <div className="w-full bg-white lg:w-[30%] flex flex-col justify-center items-center px-5 lg:px-12 md:px-16 sm:px-10 pt-28 pb-20 text-center">
          <Header />
          <SignupForm />
        </div>
        <Illustration />
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["common"],
        nextI18NextConfig
      )),
    },
  };
};

export default Signup;
