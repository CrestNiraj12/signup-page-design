import Image from "../../../assets/images/image.svg";

export default function Illustration() {
  return (
    <div className="flex-1 flex justify-center items-center bg-[#FAFAFA] min-h-[100vh]">
      <img src={Image} alt="Illustration" />
    </div>
  );
}
