import Image from "../atoms/Image";
import Logo from "../../../assets/images/logo.svg";
import Heading from "../atoms/Heading";

export default function Title({ className = "" }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <Image src={Logo} className="scale-150" height={100} width={59} />
      <Heading className="font-[600] mt-5 text-xl">Sign Up</Heading>
    </div>
  );
}
