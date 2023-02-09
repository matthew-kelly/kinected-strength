import Head from "next/head";
import PageBanner from "../../components/PageBanner";
import TestimonialBlock from "../../components/TestimonialBlock";
import bannerImg from "../../public/images/community.jpg";
import testimonialImg from "../../public/temp/testimonial-sample.png"; // FIXME: get each image from db
import EventCard from "../../components/EventCard";
import { Quartercircle } from "../../components/shapes";
import { eventsQuery, featuredEventQuery } from "../../lib/queries";
import { client } from "../../lib/sanityClient";

export default function Community({
  upcomingEvents,
  pastEvents,
  featuredEvent,
}) {
  // FIXME: source from database?
  const title = "Community";
  const tagline = `Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed diam nonummy nibh euismod tinci`;
  const text = `Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed diam nonummy nibh euismod tinci- dunt ut laoreet Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam`;
  const image = {
    image: bannerImg,
    alt: "Briana, Jess, and Andrea sitting on a pier",
  };

  return (
    <>
      <Head>
        {/* FIXME: add metadata */}
        <title>Community | Kinected Strength</title>
        {/* <meta name="description" content="" /> */}
      </Head>

      <div className="bg-primary-dark flex flex-col relative">
        <PageBanner image={image} title={title} tagline={tagline} text={text} />
      </div>
      <div className="flex flex-col bg-light-gray md:px-24 px-8 md:py-20 py-8 md:pb-16 text-primary-dark">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h1 className="uppercase text-xl mb-8">Upcoming Events</h1>

          {featuredEvent?._id && (
            <div className="flex justify-start md:flex-row flex-col lg:gap-16 gap-4 mb-16">
              <div className="lg:min-w-md md:min-w-sm">
                <EventCard event={featuredEvent} />
              </div>
              <div className="md:max-w-sm md:mt-16 mt-4 lg:ml-8 md:ml-4 flex flex-col items-center relative">
                <p className="z-10">{featuredEvent.description}</p>
                <Quartercircle
                  width={150}
                  height={150}
                  color="fill-secondary-light"
                  className="rotate-0 md:absolute md:block hidden -right-20 -top-20"
                />
              </div>
            </div>
          )}

          {upcomingEvents.length > 0 && (
            <div className="grid md:grid-cols-2 gap-16">
              {upcomingEvents &&
                upcomingEvents.map((item) => (
                  <EventCard key={item._id} event={item} />
                ))}
            </div>
          )}

          {pastEvents.length > 0 && (
            <>
              <h1 className="uppercase text-xl mb-8 mt-16">Past Events</h1>
              <div className="grid md:grid-cols-2 gap-16">
                {pastEvents &&
                  pastEvents.map((item) => (
                    <EventCard key={item._id} event={item} />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* FIXME: get from db */}
      <TestimonialBlock
        testimonial={{
          content: `"Briana is a patient, knowledgeable and motivating trainer. I am a 73-year-old with osteoporosis & scoliosis. When I started with Briana I couldn’t even get in and out of the bathtub, and I didn’t have the strength to pull on my tenser nylons. Now I can easily do these things and so much more! I recommend Briana highly. I just keep getting stronger and stronger with no injuries when I am training under her direction."`,
          author: "LT",
          image: testimonialImg,
        }}
        word="community"
      />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvent = await client.fetch(featuredEventQuery);
  const { upcomingEvents, pastEvents } = await client.fetch(eventsQuery, {
    featuredEventId: featuredEvent?._id,
  });

  return {
    props: {
      upcomingEvents,
      pastEvents,
      featuredEvent,
    },
  };
}
