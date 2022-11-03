import Image from "../atoms/Image";
import Logo from "../../../assets/images/logo.svg";
import Heading from "../atoms/Heading";

export default function Title({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image src={Logo} className="" height={100} width={59} />
      <Heading className="font-bold mt-2">Sign Up</Heading>
    </div>
  );
}
