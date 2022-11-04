import { createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import Link from "../atoms/Link";
import Text from "../atoms/Text";
import InputGroup from "../molecules/InputGroup";
import Eye from "../../../assets/images/eye.png";
import EyeOff from "../../../assets/images/eye-off.png";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";

export default function SignupForm() {
  const navigate = useNavigate();

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
        navigate("/account-created");
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
        label="Full Name"
        placeholder="John Kevine"
      />
      <InputGroup
        type="email"
        name="email"
        id="email"
        value={data.email}
        onChange={handleChange}
        label="Email Address"
        placeholder="example@gmail.com"
      />
      <InputGroup
        type="text"
        name="username"
        id="username"
        value={data.username}
        onChange={handleChange}
        label="Username"
        placeholder="johnkevine4362"
      />
      <div className="relative w-full">
        <InputGroup
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={data.password}
          onChange={handleChange}
          label="Password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <div
          className="icon_button absolute right-4 top-[3.05rem]"
          onClick={handleTogglePassword}
        >
          <img
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
          By creating an account you agree to the{" "}
          <span>
            <Link href="/">terms of use</Link>
          </span>{" "}
          and our{" "}
          <span>
            <Link href="/">privacy policy.</Link>
          </span>
        </Text>
      </div>
      <Button
        type="submit"
        className="my-5 text-white bg-[#3767B1] hover:bg-[#214275] text-sm tracking-wide"
        hasIcon={false}
        onClick={handleSignUp}
      >
        Create account
      </Button>
      <Text className="w-full text-center mt-3 text-sm">
        Already have an account?{" "}
        <span>
          <Link underline={false} href="/">
            Log in
          </Link>
        </span>
      </Text>
    </form>
  );
}
