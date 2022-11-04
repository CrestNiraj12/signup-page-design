import InfoCard from "../UI/molecules/InfoCard";
import Like from "../../assets/images/like.png";
import Text from "../UI/atoms/Text";

const AccountCreated = () => {
  return (
    <main>
      <InfoCard image={Like} onClick={() => null} buttonText={"Log out"}>
        <Text className="font-bold mt-5">
          Your account successfully created.
        </Text>
      </InfoCard>
    </main>
  );
};

export default AccountCreated;
