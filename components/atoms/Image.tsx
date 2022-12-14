import NextImage, { StaticImageData } from "next/image";

export default function Image({
  className = "",
  src,
  height = undefined,
  width = undefined,
  alt = "",
}: {
  className?: string;
  src: string | StaticImageData;
  height?: number;
  width?: number;
  alt?: string;
  customSize?: boolean;
}) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
    />
  );
}
