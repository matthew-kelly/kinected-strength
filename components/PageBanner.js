import Image from "next/image";

export default function PageBanner({ image, title, tagline, text }) {
  return (
    <div className="bg-primary-dark flex flex-col relative z-10">
      {/* FIXME: account for multiple images */}
      <Image
        src={image.url}
        layout="responsive"
        priority
        alt="image.alt // FIXME: add real alt text"
        className="z-0"
      />
      <div className="flex flex-col p-24">
        <h1 className="text-primary-light uppercase text-xl mb-8">{title}</h1>
        <div className="flex">
          <div className="w-3/5">
            <h2 className="text-primary-light text-6xl">{tagline}</h2>
          </div>
          <div className="w-2/5 mx-8">
            <p className="text-primary-light font-normal">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
