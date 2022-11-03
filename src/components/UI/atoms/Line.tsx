export default function Line({
  className = "",
  lineColor = "#030229",
  height = "1px",
  opacity = 0.1,
}: {
  className?: string;
  lineColor?: string;
  height?: string;
  opacity?: number;
}) {
  return (
    <hr
      className={`${className} w-full bg-[${lineColor}] h-[${height}] opacity-[${opacity}]`}
    />
  );
}
