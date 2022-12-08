import Image from "next/image";

export default function PageBanner({
  image,
  title,
  tagline,
  taglineWidthClass = "w-3/5",
  text,
  textWidthClass = "w-2/5",
}) {
  return (
    <div className="bg-primary-dark flex flex-col relative z-10 max-w-7xl self-center">
      {image.length && image.length > 1 ? (
        <div className="flex space-between justify-center w-full gap-24 px-24">
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
      <div className="flex flex-col p-24">
        <h1 className="text-primary-light uppercase text-xl mb-8">{title}</h1>
        <div className="flex">
          <div className={taglineWidthClass}>
            <h2 className="text-primary-light text-6xl">{tagline}</h2>
          </div>
          <div className={`${textWidthClass} mx-8`}>
            <p className="text-primary-light font-normal">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
