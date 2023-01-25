import Image from "next/image";

export default function PageBanner({
  image,
  title,
  tagline,
  taglineWidthClass = "md:w-3/5",
  text,
  textWidthClass = "md:w-2/5",
}) {
  return (
    <div className="bg-primary-dark flex flex-col relative z-10 max-w-7xl self-center">
      {image.length && image.length > 1 ? (
        <div className="flex space-between justify-center w-full lg:gap-24 md:gap-16 gap-8 lg:px-24 md:px-16">
          {image.map((img, i) => (
            <div key={i} className="w-full">
              <Image
                src={img.url}
                layout="responsive"
                priority
                alt="img.alt // FIXME: add real alt text"
                className="z-0"
              />
            </div>
          ))}
        </div>
      ) : (
        <Image
          src={image.url}
          layout="responsive"
          priority
          alt="image.alt // FIXME: add real alt text"
          className="z-0"
        />
      )}
      <div className="flex flex-col lg:p-24 md:p-16 p-8">
        <h1 className="text-primary-light uppercase text-xl font-extrabold tracking-widest mb-8">
          {title}
        </h1>
        <div className="flex md:flex-row flex-col">
          <div className={taglineWidthClass}>
            <h2 className="text-primary-light lg:text-5xl md:text-4xl text-2xl font-extrabold tracking-wider">
              {tagline}
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
