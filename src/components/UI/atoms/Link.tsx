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
    <a
      href={href}
      className={`${className} ${
        underline ? "underline" : ""
      } text-[#3767B1] font-[Nunito] text-[15px]`}
    >
      {children}
    </a>
  );
}
