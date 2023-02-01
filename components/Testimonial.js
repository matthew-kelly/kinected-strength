import Image from "next/legacy/image";

export default function Testimonial({ content, author, image }) {
  return (
    <div className="text-primary-dark flex md:flex-row flex-col items-center lg:gap-16 md:gap-8 gap-4">
      {image && (
        <div className="max-w-fit min-w-[200px]">
          <Image
            src={image}
            // layout="responsive"
            alt="// FIXME: real alt text"
            placeholder="blur"
          />
        </div>
      )}
      <div className="flex flex-col">
        <svg
          className="mb-2"
          width="24"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2915 15.8334C9.93845 15.8334 9.59961 15.8872 9.26236 15.9363C9.37161 15.5689 9.48403 15.1953 9.66453 14.8596C9.84503 14.3719 10.1269 13.9492 10.4071 13.5233C10.6414 13.0625 11.0547 12.7506 11.3587 12.3564C11.6769 11.9732 12.1108 11.7183 12.4544 11.4C12.7916 11.0675 13.2334 10.9013 13.5849 10.6669C13.9522 10.4564 14.272 10.2236 14.614 10.1128L15.4674 9.76128L16.2179 9.44936L15.45 6.38086L14.5048 6.60886C14.2024 6.68486 13.8334 6.77353 13.4139 6.87961C12.9848 6.95878 12.5272 7.17569 12.0174 7.37361C11.5139 7.59844 10.9312 7.75044 10.3897 8.11144C9.84503 8.45661 9.21645 8.74478 8.66228 9.20711C8.12553 9.68369 7.47795 10.0969 6.99978 10.7034C6.47728 11.2702 5.96111 11.8655 5.56053 12.5432C5.09661 13.1892 4.78153 13.8985 4.44903 14.5999C4.1482 15.3014 3.90595 16.0186 3.70803 16.7153C3.33278 18.1118 3.16495 19.4386 3.10003 20.5739C3.0462 21.7107 3.07786 22.6559 3.14436 23.3399C3.16811 23.6629 3.21245 23.9764 3.24411 24.1934L3.2837 24.4594L3.32486 24.4499C3.60648 25.7653 4.25476 26.9742 5.19472 27.9366C6.13468 28.8991 7.32791 29.5757 8.63638 29.8883C9.94484 30.2009 11.3151 30.1367 12.5886 29.7031C13.862 29.2695 14.9868 28.4842 15.8326 27.4381C16.6784 26.3919 17.2108 25.1277 17.3681 23.7917C17.5254 22.4556 17.3013 21.1023 16.7217 19.8883C16.142 18.6743 15.2305 17.6492 14.0926 16.9316C12.9546 16.214 11.6368 15.8333 10.2915 15.8334V15.8334ZM27.7082 15.8334C27.3551 15.8334 27.0163 15.8872 26.679 15.9363C26.7883 15.5689 26.9007 15.1953 27.0812 14.8596C27.2617 14.3719 27.5435 13.9492 27.8238 13.5233C28.0581 13.0625 28.4714 12.7506 28.7754 12.3564C29.0936 11.9732 29.5274 11.7183 29.871 11.4C30.2083 11.0675 30.65 10.9013 31.0015 10.6669C31.3689 10.4564 31.6887 10.2236 32.0307 10.1128L32.8841 9.76128L33.6346 9.44936L32.8667 6.38086L31.9214 6.60886C31.619 6.68486 31.2501 6.77353 30.8305 6.87961C30.4014 6.95878 29.9439 7.17569 29.434 7.37361C28.9321 7.60003 28.3479 7.75044 27.8064 8.11303C27.2617 8.45819 26.6331 8.74636 26.0789 9.20869C25.5422 9.68528 24.8946 10.0985 24.4164 10.7034C23.8939 11.2702 23.3778 11.8655 22.9772 12.5432C22.5133 13.1892 22.1982 13.8985 21.8657 14.5999C21.5649 15.3014 21.3226 16.0186 21.1247 16.7153C20.7494 18.1118 20.5816 19.4386 20.5167 20.5739C20.4629 21.7107 20.4945 22.6559 20.561 23.3399C20.5848 23.6629 20.6291 23.9764 20.6608 24.1934L20.7004 24.4594L20.7415 24.4499C21.0231 25.7653 21.6714 26.9742 22.6114 27.9366C23.5514 28.8991 24.7446 29.5757 26.053 29.8883C27.3615 30.2009 28.7317 30.1367 30.0052 29.7031C31.2787 29.2695 32.4034 28.4842 33.2492 27.4381C34.0951 26.3919 34.6274 25.1277 34.7848 23.7917C34.9421 22.4556 34.718 21.1023 34.1383 19.8883C33.5587 18.6743 32.6471 17.6492 31.5092 16.9316C30.3713 16.214 29.0535 15.8333 27.7082 15.8334V15.8334Z"
            fill="#164AA0"
          />
        </svg>

        <p>{content}</p>
        <p className="mt-2 font-semibold">&ndash; {author}</p>
      </div>
    </div>
  );
}
