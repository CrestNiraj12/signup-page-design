import Image from "../../../assets/images/image.svg";

export default function Illustration() {
  return (
    <div className="hidden lg:flex flex-1 justify-center items-center min-h-[100vh]">
      <img src={Image} className="px-20" alt="Illustration" />
    </div>
  );
}
