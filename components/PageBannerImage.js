import { getImageProps } from "next/image";

export default function PageBannerImage({
  className,
  alt,
  fill = false,
  priority = true,
  sizes = "100vw",
  breakpoint,
  desktopImage,
  mobileImage,
  style = { objectFit: "cover" },
  quality = 80,
  placeholder = "blur",
  layout = "responsive",
  ...props
}) {
  const common = { alt, fill, priority, sizes, quality, placeholder, ...props };
  const desktopMedia = `(min-width: ${breakpoint}px)`;
  const mobileMedia = `(max-width: ${breakpoint - 1}px)`;
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: desktopImage });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: mobileImage });

  return (
    <picture className={className}>
      <source media={desktopMedia} srcSet={desktop} />
      <source media={mobileMedia} srcSet={mobile} />
      <img {...rest} alt={alt} />
    </picture>
  );
}
