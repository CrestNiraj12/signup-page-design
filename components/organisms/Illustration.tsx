import Image from "../atoms/Image";
import IllustrationImage from "../../public/images/image.svg";

export default function Illustration() {
  return (
    <div className="hidden lg:flex flex-1 justify-center items-center min-h-[100vh]">
      <Image src={IllustrationImage} className="px-20" alt="Illustration" />
    </div>
  );
}
