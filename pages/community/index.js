import PageBanner from "../../components/PageBanner";
import TestimonialBlock from "../../components/TestimonialBlock";
import bannerImg from "../../public/temp/tempbanner-horiz.jpg"; // FIXME: get from db
import grassImg from "../../public/temp/grass.png"; // FIXME: get from db
import EventCard from "../../components/EventCard";
import { Quartercircle } from "../../components/shapes";

export default function Education() {
  // FIXME: source from database?
  const title = "Community";
  const tagline = `Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed diam nonummy nibh euismod tinci`;
  const text = `Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed diam nonummy nibh euismod tinci- dunt ut laoreet Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam`;
  const image = { url: bannerImg };

  const post = {
    image: {
      url: grassImg,
    },
    title: "This is an event",
    date: "December 1, 2022",
    slug: "examplepost",
  };
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
      <div className="flex flex-col bg-light-gray md:px-24 px-8 md:py-20 py-8 mdpb-32 text-primary-dark">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h1 className="uppercase text-xl mb-8">Upcoming Events</h1>
          <div className="flex justify-start gap-16">
            {/* FIXME: get from db */}
            <div className="min-w-fit md:min-w-md">
              <EventCard post={post} />
            </div>
            <div className="max-w-sm mt-16 ml-8 flex flex-col items-center relative">
              <p className="z-10">
                Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed
                diam nonummy nibh euismod tinci- dunt ut laoreet Lorem ipsum
                dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam
              </p>
              <Quartercircle
                width={150}
                height={150}
                color="fill-secondary-light"
                className="rotate-90 absolute top-16 right-0"
              />
            </div>
          </div>

          <h1 className="uppercase text-xl mb-8 mt-32">Past Events</h1>
          <div className="grid md:grid-cols-2 gap-16">
            {/* FIXME: get from db */}
            <EventCard post={post} />
            <EventCard post={post} />
          </div>
        </div>
      </div>

      {/* FIXME: get from db */}
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
