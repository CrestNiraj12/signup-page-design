import Button from "../atoms/Button";
import GoogleLogo from "../../../assets/images/google.svg";
import FBLogo from "../../../assets/images/fb.svg";

export default function SocialButtons({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className} w-full flex justify-around`}>
      <Button hasIcon={true} Icon={GoogleLogo} onClick={() => null}>
        Google
      </Button>
      <span className="w-10"></span>
      <Button hasIcon={true} Icon={FBLogo} onClick={() => null}>
        Facebook
      </Button>
    </div>
  );
}
