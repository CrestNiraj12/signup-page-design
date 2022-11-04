import Button from "../atoms/Button";
import GoogleLogo from "../../../assets/images/google.svg";
import FBLogo from "../../../assets/images/fb.svg";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export default function SocialButtons({
  className = "",
}: {
  className?: string;
}) {
  const navigate = useNavigate();

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
        navigate("/account-created");
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
        Google
      </Button>
      <span className="w-10"></span>
      <Button
        fontSize="sm"
        hasIcon={true}
        Icon={FBLogo}
        onClick={() => socialSignIn("facebook")}
      >
        Facebook
      </Button>
    </div>
  );
}
