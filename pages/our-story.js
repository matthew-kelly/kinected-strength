import Image from "next/image";
import HomeLayout from "../components/layouts/homeLayout";
import { Circle, Quartercircle, Semicircle } from "../components/shapes";

export default function OurStory() {
  return (
    <>
      <div className="bg-primary-dark flex relative">
        <div className="flex items-end pb-9 mx-16 mt-[110px]">
          {/* FIXME: fix spacing at top with image */}
          <div className="flex">
            <div className="relative">
              <Quartercircle
                color="fill-secondary-light"
                width="327"
                height="333"
              />
              <h1 className="font-display font-semibold text-7xl text-primary-dark absolute bottom-[21%] left-[13%] flex flex-col">
                <span>Our </span>
                <span>Story</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end items-end gap-7 -ml-12">
              <Semicircle
                color="fill-primary-light"
                width="229"
                height="103"
                rotate="180"
                className=""
              />
              <Circle color="fill-secondary-dark" size="138" />
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/temp/temp-image.png"
            alt="temp banner"
            width="880"
            height="883"
            // layout="responsive"
            // objectFit="cover"
            priority={true}
          />
        </div>
      </div>
    </>
  );
}
