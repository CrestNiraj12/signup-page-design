import NextLink from "next/link";

export default function Link({
  className = "",
  children,
  href,
  underline = true,
}: {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
  href: string;
  underline?: boolean;
}) {
  return (
    <NextLink
      href={href}
      className={`${className} ${
        underline ? "underline" : ""
      } text-[#3767B1] text-[15px]`}
    >
      {children}
    </NextLink>
  );
}
