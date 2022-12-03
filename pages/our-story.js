import Image from "next/image";
import PageBanner from "../components/PageBanner";
import bannerImg from "../public/temp/tempbanner-horiz.jpg"; // FIXME: get from db
import tguPic from "../public/temp/tgu.png"; // FIXME: get each image from db
import { Circle, Quartercircle, Semicircle } from "../components/shapes";
import TestimonialBlock from "../components/TestimonialBlock";

export default function OurStory() {
  // FIXME: source from database?
  const title = "Our Story";
  const tagline = "Join a community of evidence-based strength training.";
  const text = `Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed diam nonummy nibh euismod tinci- dunt ut laoreet Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipi-`;
  return (
    <>
      <div className="bg-primary-dark flex flex-col relative pt-32">
        <PageBanner
          image={{ url: bannerImg }}
          title={title}
          tagline={tagline}
          text={text}
        />
      </div>
      <div className="flex flex-col bg-light-gray px-24 py-20 text-primary-dark">
        <h1 className="uppercase text-xl mb-8">Meet the team</h1>

        <div className="relative max-w-2xl flex flex-col ml-24 mt-12">
          <h2 className="flex flex-col text-6xl absolute left-1/2 -translate-x-1/2 -top-16 z-20">
            <span>Andrea</span>
            <span>Brennan</span>
          </h2>
          <div className="flex items-center gap-8 z-10">
            <div className="w-1/2">
              <Image
                width={300}
                height={425}
                layout="responsive"
                src={tguPic}
                alt="// FIXME: use real alt text"
              />
            </div>
            <div className="w-1/2">
              <p className="text-xl font-display font-bold mb-4">
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem
                ipsum dolor sit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed
                diam nonummy nibh euismod tinci- dunt ut laoreet Lorem ipsum
                dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet
              </p>
            </div>
          </div>
          <Circle
            size={200}
            color="fill-secondary-light"
            className="absolute -bottom-24 -left-24"
          />
        </div>

        <div className="relative max-w-2xl flex flex-col self-end mt-32 mr-24">
          <h2 className="flex flex-col text-6xl absolute left-1/2 -translate-x-1/2 -top-16 z-20">
            <span>Jess</span>
            <span>Pastro</span>
          </h2>
          <div className="flex items-center gap-8 z-10 flex-row-reverse">
            <div className="w-1/2">
              <Image
                width={300}
                height={425}
                layout="responsive"
                src={tguPic}
                alt="// FIXME: use real alt text"
              />
            </div>
            <div className="w-1/2">
              <p className="text-xl font-display font-bold mb-4">
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem
                ipsum dolor sit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed
                diam nonummy nibh euismod tinci- dunt ut laoreet Lorem ipsum
                dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet
              </p>
            </div>
          </div>
          <svg
            viewBox="0 0 135 164"
            className="fill-primary-light w-48 absolute bottom-0 -translate-y-1/2 -right-32"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 56L135 56C135 -18.6667 -3.26378e-06 -18.6667 0 56ZM-4.72083e-06 56L0 164H135V56L-4.72083e-06 56Z"
            />
          </svg>
        </div>

        <div className="relative max-w-2xl flex flex-col self-start ml-24 mt-32 mb-12">
          <h2 className="flex flex-col text-6xl absolute left-1/2 -translate-x-1/2 -top-16 z-20">
            <span>Briana</span>
            <span>Kelly</span>
          </h2>
          <div className="flex items-center gap-8 z-10">
            <div className="w-1/2">
              <Image
                width={300}
                height={425}
                layout="responsive"
                src={tguPic}
                alt="// FIXME: use real alt text"
              />
            </div>
            <div className="w-1/2">
              <p className="text-xl font-display font-bold mb-4">
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem
                ipsum dolor sit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed
                diam nonummy nibh euismod tinci- dunt ut laoreet Lorem ipsum
                dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet
              </p>
            </div>
          </div>
          <svg
            viewBox="0 0 445 204"
            className="fill-secondary-dark absolute bottom-0 translate-y-1/2 -left-32 w-64"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 154L445 154C445 -51.3336 -1.07576e-05 -51.3336 0 154ZM-2.61955e-06 154L0 204L445 204V154L-2.61955e-06 154Z"
            />
          </svg>
        </div>
      </div>

      <TestimonialBlock
        testimonials={[
          {
            content: `"Briana is a patient, knowledgeable and motivating trainer. I am a 73-year-old with osteoporosis & scoliosis. When I started with Briana I couldn’t even get in and out of the bathtub, and I didn’t have the strength to pull on my tenser nylons. Now I can easily do these things and so much more! I recommend Briana highly. I just keep getting stronger and stronger with no injuries when I am training under her direction."`,
            author: "LT",
          },
          {
            content: `“I have been working out in the garden for the last couple of days and I am thrilled with what I can do without pain! I can get up and down, no problem. I’m amazed at my progress in a few months. Thank you so much. You know what you’re doing and have helped me so much!”`,
            author: "CV",
          },
        ]}
      />
    </>
  );
}
