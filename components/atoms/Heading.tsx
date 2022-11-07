import { DefaultTFuncReturn } from "i18next";

export default function Heading({
  className = "",
  children,
}: {
  className?: string;
  children: string | JSX.Element | JSX.Element[] | DefaultTFuncReturn;
}) {
  return <h1 className={className}>{children}</h1>;
}
