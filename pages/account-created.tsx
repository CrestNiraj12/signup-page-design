import InfoCard from "../components/molecules/InfoCard";
import Like from "../public/images/like.png";
import Text from "../components/atoms/Text";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../next-i18next.config";
import { useTranslation } from "react-i18next";

const AccountCreated = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const logOut = () =>
    signOut(auth)
      .then(() => {
        console.log("Successfully logged out!");
        router.push("/");
      })
      .catch((err) => console.log(err.message));

  return (
    <>
      <Head>
        <title>Account Created Page</title>
      </Head>
      <InfoCard image={Like} onClick={logOut} buttonText={t("log-out")}>
        <Text className="font-bold mt-5">{t("account-created")}</Text>
      </InfoCard>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["common"],
        nextI18nextConfig
      )),
    },
  };
};

export default AccountCreated;
