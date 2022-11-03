export default function Checkbox({
  className = "",
  children,
}: {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
}) {
  return <p className={className}>{children}</p>;
}
