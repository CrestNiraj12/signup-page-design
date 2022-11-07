import { DefaultTFuncReturn } from "i18next";

export default function Text({
  className = "",
  children,
}: {
  className?: string;
  children:
    | string
    | JSX.Element
    | (string | JSX.Element)[]
    | DefaultTFuncReturn;
}) {
  return <p className={className}>{children}</p>;
}
