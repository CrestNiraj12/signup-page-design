import { MouseEventHandler } from "react";

export default function Button({
  className = "w-full",
  hasIcon = false,
  Icon,
  children,
  onClick,
  bgColor = "#F7F7F8",
  hoverBgColor = "#d1d1d2",
  textColor = "#030229",
  fontSize = "xs",
}: {
  hasIcon: boolean;
  Icon?: string;
  className?: string;
  children: string | JSX.Element | JSX.Element[];
  onClick: MouseEventHandler;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  fontSize?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} text-[${fontSize}] text-[${textColor}] bg-[${bgColor}] hover:bg-[${hoverBgColor}] transition-colors ease-in text-center py-3 px-4 rounded-md inline-flex justify-center items-center`}
    >
      {hasIcon ? (
        <img src={Icon} alt="icon" className="mr-2" height="18px" />
      ) : (
        ""
      )}
      <span>{children}</span>
    </button>
  );
}
