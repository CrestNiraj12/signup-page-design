import { MouseEventHandler } from "react";
import Button from "../atoms/Button";
import InfoLayout from "../atoms/InfoLayout";

type Props = {
  children: JSX.Element | JSX.Element[];
  image: string;
  onClick: MouseEventHandler;
  buttonText: string;
};

const InfoCard = ({ children, image, onClick, buttonText }: Props) => {
  return (
    <InfoLayout>
      <div className="p-28 bg-white flex flex-col justify-center items-center">
        <img src={image} alt="info" className="mb-5" />
        {children}
        <Button
          onClick={onClick}
          hasIcon={false}
          className="mt-5 w-40 bg-[#3767B1] text-white hover:bg-[#2c5490]"
          fontSize="xs"
        >
          {buttonText}
        </Button>
      </div>
    </InfoLayout>
  );
};

export default InfoCard;
