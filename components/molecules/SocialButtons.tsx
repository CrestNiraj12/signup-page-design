import Button from "../atoms/Button";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { useRouter } from "next/router";
import GoogleLogo from "../../public/images/google.svg";
import FBLogo from "../../public/images/fb.svg";
import { useTranslation } from "react-i18next";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export default function SocialButtons({
  className = "",
}: {
  className?: string;
}) {
  const router = useRouter();
  const { t } = useTranslation();

  const socialSignIn = (social: "google" | "facebook") => {
    signInWithPopup(
      auth,
      social === "google" ? googleProvider : facebookProvider
    )
      .then((result) => {
        const credential =
          social === "google"
            ? GoogleAuthProvider.credentialFromResult(result)
            : FacebookAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(token);
        console.log(user);
        router.push("/account-created");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className={`${className} w-full flex justify-around`}>
      <Button
        fontSize="sm"
        hasIcon={true}
        Icon={GoogleLogo}
        onClick={() => socialSignIn("google")}
      >
        {t("google")}
      </Button>
      <span className="w-10"></span>
      <Button
        fontSize="sm"
        hasIcon={true}
        Icon={FBLogo}
        onClick={() => socialSignIn("facebook")}
      >
        {t("fb")}
      </Button>
    </div>
  );
}
