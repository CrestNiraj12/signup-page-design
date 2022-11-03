export default function Image({
  className = "",
  src,
  height = 32,
  width = 32,
  alt = "",
}: {
  className?: string;
  src: string;
  height?: number;
  width?: number;
  alt?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
    />
  );
}
