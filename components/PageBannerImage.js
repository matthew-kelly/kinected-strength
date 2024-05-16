import Head from "next/head";
import { unstable_getImgProps as getImgProps } from "next/image";

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
  const commonPreload = {
    rel: "preload",
    as: "image",
    imageSizes: sizes,
  };

  const common = { alt, fill, priority, sizes, quality, placeholder, ...props };
  const { srcSet: desktop } = getImgProps({
    ...common,
    src: desktopImage,
  }).props;
  const {
    srcSet: mobile,
    fetchPriority,
    ...rest
  } = getImgProps({
    ...common,
    src: mobileImage,
  }).props;

  const desktopMedia = `(min-width: ${breakpoint}px)`;
  const mobileMedia = `(max-width: ${breakpoint - 1}px)`;
  return (
    <>
      <Head>
        <link
          {...commonPreload}
          media={desktopMedia}
          href={desktopImage.src}
          imageSrcSet={desktop}
        />
        <link
          {...commonPreload}
          media={mobileMedia}
          href={mobileImage.src}
          imageSrcSet={mobile}
        />
      </Head>
      <picture className={className}>
        <source media={desktopMedia} srcSet={desktop} />
        <source media={mobileMedia} srcSet={mobile} />
        <img alt={alt} fetchpriority={fetchPriority} {...rest} />
      </picture>
    </>
  );
}
