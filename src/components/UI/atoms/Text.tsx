export default function Text({
  className = "",
  children,
}: {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
}) {
  return <p className={className}>{children}</p>;
}
