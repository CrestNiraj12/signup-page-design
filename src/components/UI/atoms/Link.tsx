export default function Link({
  className = "",
  children,
  href,
}: {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
  href: string;
}) {
  return (
    <a href={href} className={`${className} underline text-[#3767B1]`}>
      {children}
    </a>
  );
}
