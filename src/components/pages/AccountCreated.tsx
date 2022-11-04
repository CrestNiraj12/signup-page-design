import InfoCard from "../UI/molecules/InfoCard";
import Like from "../../assets/images/like.png";
import Text from "../UI/atoms/Text";
import { signOut } from "firebase/auth";
import { auth } from "./Signup";
import { useNavigate } from "react-router-dom";

const AccountCreated = () => {
  const navigate = useNavigate();

  const logOut = () =>
    signOut(auth)
      .then(() => {
        console.log("Successfully logged out!");
        navigate("/");
      })
      .catch((err) => console.log(err.message));

  return (
    <main>
      <InfoCard image={Like} onClick={logOut} buttonText={"Log out"}>
        <Text className="font-bold mt-5">
          Your account successfully created.
        </Text>
      </InfoCard>
    </main>
  );
};

export default AccountCreated;
