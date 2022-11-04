import Divider from "../molecules/Divider";
import SocialButtons from "../molecules/SocialButtons";
import Title from "../molecules/Title";

export default function Header() {
  return (
    <>
      <Title />
      <SocialButtons className="mt-14" />
      <Divider className="my-5" />
    </>
  );
}
