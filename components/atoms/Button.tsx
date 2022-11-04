import { MouseEventHandler } from "react";
import Image from "../atoms/Image";

export default function Button({
  type = "button",
  className = "",
  hasIcon = false,
  Icon,
  children,
  onClick,
  fontSize = "sm",
}: {
  type?: "button" | "submit" | "reset";
  hasIcon: boolean;
  Icon?: string;
  className?: string;
  children: string | JSX.Element | (string | JSX.Element)[];
  onClick: MouseEventHandler;
  fontSize?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full text-${fontSize} text-[#030229] bg-[#F7F7F8] hover:bg-[#d1d1d2] transition-colors ease-in text-center py-3 px-4 rounded-md inline-flex justify-center items-center ${className}`}
    >
      {hasIcon ? <Image src={Icon!} alt="icon" className="mr-2" /> : ""}
      <span>{children}</span>
    </button>
  );
}
