import Button from "../atoms/Button";
import GoogleLogo from "../../../assets/images/google.svg";
import FBLogo from "../../../assets/images/fb.svg";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../pages/Signup";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export default function SocialButtons({
  className = "",
}: {
  className?: string;
}) {
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(token);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const facebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(token);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(error.customData.email);
      });
  };

  return (
    <div className={`${className} w-full flex justify-around`}>
      <Button
        fontSize="sm"
        hasIcon={true}
        Icon={GoogleLogo}
        onClick={googleSignIn}
      >
        Google
      </Button>
      <span className="w-10"></span>
      <Button
        fontSize="sm"
        hasIcon={true}
        Icon={FBLogo}
        onClick={facebookSignIn}
      >
        Facebook
      </Button>
    </div>
  );
}
