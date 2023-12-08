import PageBannerImage from "./PageBannerImage";
import { breakpoints } from "../utils/theme";

export default function PageBanner({
  image,
  mobileImage,
  alt,
  title,
  headline,
  headlineWidthClass = "md:w-3/5",
  text,
  textWidthClass = "md:w-2/5",
}) {
  return (
    <div className="bg-primary-dark flex flex-col relative z-10 max-w-7xl self-center">
      <div className="relative block">
        <PageBannerImage
          alt={alt}
          breakpoint={breakpoints.md}
          desktopImage={image}
          mobileImage={mobileImage}
        />
      </div>
      <div className="flex flex-col lg:p-24 md:p-16 p-8">
        <h1 className="text-primary-light uppercase text-xl font-extrabold tracking-widest mb-8">
          {title}
        </h1>
        <div className="flex md:flex-row flex-col">
          <div className={headlineWidthClass}>
            <h2 className="text-primary-light lg:text-5xl md:text-4xl text-2xl font-extrabold tracking-wider">
              {headline}
            </h2>
          </div>
          <div
            className={`${textWidthClass} md:mx-8 md:mt-0 mt-4 md:mb-0 mb-4`}
          >
            <p className="text-primary-light font-normal md:text-base">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
