import Image from "next/image";
import PageBanner from "../components/PageBanner";
import TestimonialBlock from "../components/TestimonialBlock";
import bannerImg from "../public/temp/andrea-tgu-temp.png"; // FIXME: get from db

export default function Strength() {
  // FIXME: source from database?
  const title = "Strength";
  const tagline =
    "Strength is a skill. Practice moving well, then move often. Get strong. Feel confident. See concrete results.";
  const text = `Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed diam nonummy nibh euismod tinci- dunt ut laoreet Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam`;
  const image = [{ url: bannerImg }, { url: bannerImg }];
  return (
    <>
      <div className="bg-primary-dark flex flex-col relative pt-32">
        <PageBanner
          image={image}
          title={title}
          tagline={tagline}
          text={text}
          taglineWidthClass="w-3/4"
          textWidthClass="w-1/4"
        />
      </div>
      <div className="flex flex-col bg-light-gray px-24 py-20 pb-32 text-primary-dark">
        <h1 className="uppercase text-xl mb-8">Services</h1>
        <div className="flex flex-col gap-60">
          <div className="relative flex justify-between">
            <div className="max-w-lg">
              <h2 className="text-6xl mb-8">Personal Training</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euis- mod tincidunt ut laoreet Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer
                adipi
              </p>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Image
                width={250}
                height={375}
                // layout="responsive"
                src={bannerImg}
                alt="// FIXME: use real alt text"
              />
            </div>
          </div>

          <div className="relative flex flex-row-reverse justify-between mr-16">
            <div className="max-w-lg">
              <h2 className="text-6xl mb-8">Online Training</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euis- mod tincidunt ut laoreet Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer
                adipi
              </p>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Image
                width={375}
                height={565}
                // layout="responsive"
                src={bannerImg}
                alt="// FIXME: use real alt text"
              />
            </div>
          </div>

          <div className="relative flex justify-between">
            <div className="max-w-lg">
              <h2 className="text-6xl mb-8">ICBC Active Rehab</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euis- mod tincidunt ut laoreet Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer
                adipi
              </p>
            </div>
            <div className="absolute right-0 bottom-0">
              <Image
                width={250}
                height={375}
                // layout="responsive"
                src={bannerImg}
                alt="// FIXME: use real alt text"
              />
            </div>
          </div>
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
