export default function Heading({
  className = "",
  children,
}: {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
}) {
  return <h1 className={className}>{children}</h1>;
}
