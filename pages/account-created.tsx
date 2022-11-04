import InfoCard from "../components/molecules/InfoCard";
import Like from "../public/images/like.png";
import Text from "../components/atoms/Text";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
import Head from "next/head";

const AccountCreated = () => {
  const router = useRouter();

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
      <InfoCard image={Like} onClick={logOut} buttonText={"Log out"}>
        <Text className="font-bold mt-5">
          Your account successfully created.
        </Text>
      </InfoCard>
    </>
  );
};

export default AccountCreated;
