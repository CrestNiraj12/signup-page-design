import { createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, useState } from "react";
import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import Link from "../atoms/Link";
import Text from "../atoms/Text";
import InputGroup from "../molecules/InputGroup";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useRouter } from "next/router";
import Image from "../atoms/Image";
import Eye from "../../public/images/eye.png";
import EyeOff from "../../public/images/eye-off.png";
import { Trans, useTranslation } from "react-i18next";

export default function SignupForm() {
  const router = useRouter();
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    checked: false,
  });

  const [error, setError] = useState<null | string>(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setError(null);

    if (!data.name || !data.email || !data.password || !data.username) {
      setError("Error/Please fill all the fields!");
      return;
    } else if (!data.checked) {
      setError("Error/Please check the terms and conditions box to proceed!");
      return;
    }

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (cred) => {
        const user = cred.user;
        const usersRef = collection(db, "users");
        try {
          await addDoc(usersRef, {
            id: user.uid,
            name: data.name,
            email: data.email,
            username: data.username,
          });
          console.log("User added in firestore!");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        console.log(user);
        router.push("/account-created");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(error.code);
        console.log(errorMessage);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "checked" ? e.target.checked : e.target.value,
    });
  };

  return (
    <form className="w-full flex flex-col justify-start items-start">
      {error && (
        <Text className="w-full text-center text-red-600 text-sm capitalize">
          Error! {error.split("/")[1].split("-").join(" ")}!
        </Text>
      )}
      <InputGroup
        type="text"
        name="name"
        id="name"
        value={data.name}
        onChange={handleChange}
        label={t("fullname")}
        placeholder="John Kevine"
      />
      <InputGroup
        type="email"
        name="email"
        id="email"
        value={data.email}
        onChange={handleChange}
        label={t("email-address")}
        placeholder="example@gmail.com"
      />
      <InputGroup
        type="text"
        name="username"
        id="username"
        value={data.username}
        onChange={handleChange}
        label={t("username")}
        placeholder="johnkevine4362"
      />
      <div className="relative w-full">
        <InputGroup
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={data.password}
          onChange={handleChange}
          label={t("password")}
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <div
          className="icon_button absolute right-4 top-[3.05rem]"
          onClick={handleTogglePassword}
        >
          <Image
            src={showPassword ? Eye : EyeOff}
            alt="Eye icon"
            className="w-5 h-5 font-extralight"
          />
        </div>
      </div>

      <div className="flex my-3 items-start">
        <Checkbox
          id="checked"
          name="checked"
          checked={data.checked}
          onChange={handleChange}
          className="mt-1"
        />
        <Text className="text-left ml-2 text-sm text-[#030229]">
          <Trans i18nKey="terms-and-condition">
            By creating an account you agree to the{" "}
            <Link href="/">terms of use</Link> and our{" "}
            <Link href="/">privacy policy.</Link>
          </Trans>
        </Text>
      </div>
      <Button
        type="submit"
        className="my-5 text-white bg-[#3767B1] hover:bg-[#214275] text-sm tracking-wide"
        hasIcon={false}
        onClick={handleSignUp}
      >
        {t("create-account")}
      </Button>
      <Text className="w-full text-center mt-3 text-sm">
        <Trans i18nKey="already-user">
          Already have an account?{" "}
          <Link underline={false} href="/">
            Log in
          </Link>
        </Trans>
      </Text>
    </form>
  );
}
