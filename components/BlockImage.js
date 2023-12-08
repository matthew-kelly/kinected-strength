import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { urlForImage } from "../lib/sanity";

export default function BlockImage({ value, className = "" }) {
  const { aspectRatio } = getImageDimensions(value);
  const maxWidth = 800;
  const newHeight = Math.round(maxWidth / aspectRatio);
  return (
    <div className="relative w-full">
      <Image
        src={urlForImage(value).width(maxWidth).height(newHeight).url()}
        width={maxWidth}
        height={newHeight}
        quality={90}
        alt={value?.alt}
        className={className}
      />
    </div>
  );
}
