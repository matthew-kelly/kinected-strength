import PageBanner from "../../components/PageBanner";
import TestimonialBlock from "../../components/TestimonialBlock";
import bannerImg from "../../public/images/community.jpg";
import bannerImgMobile from "../../public/images/community-mobile.jpg";
import EventCard from "../../components/EventCard";
import { Quartercircle } from "../../components/shapes";
import {
  eventsQuery,
  featuredEventQuery,
  testimonialsQuery,
} from "../../lib/queries";
import { client } from "../../lib/sanityClient";
import MetaTags from "../../components/MetaTags";
import { useWindowSize } from "../../lib/useWindowSize";
import { breakpoints } from "../../utils/theme";

export default function Community({
  upcomingEvents,
  pastEvents,
  featuredEvent,
  page,
}) {
  const windowSize = useWindowSize();

  return (
    <>
      <MetaTags
        title={page.title}
        description={`${page.bannerHeadline} ${page.bannerText}`}
        slug="community"
        image={{ src: bannerImg.src, isExternal: false }}
      />

      <div className="bg-primary-dark flex flex-col relative">
        <PageBanner
          image={bannerImg}
          mobileImage={bannerImgMobile}
          alt="Briana, Jess, and Andrea sitting on a pier"
          title={page.title}
          headline={page.bannerHeadline}
          text={page.bannerText}
        />
      </div>
      <div className="flex flex-col bg-light-gray md:px-24 px-8 md:py-20 py-8 md:pb-16 text-primary-dark">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h1 className="uppercase text-xl mb-8">Upcoming Events</h1>

          {featuredEvent?._id && (
            <div className="grid md:grid-cols-2 md:gap-16 gap-2">
              {/* <div className="flex justify-start md:flex-row flex-col lg:gap-16 gap-4 mb-16"> */}
              {/* <div className="lg:min-w-md md:min-w-sm"> */}
              <EventCard event={featuredEvent} />
              {/* </div> */}
              {/* <div className="md:max-w-sm md:mt-16 mt-4 lg:ml-8 md:ml-4 flex flex-col items-center relative"> */}
              <div className="md:max-w-sm lg:mt-16 md:mt-8 mt-4 lg:ml-8 md:ml-4 flex flex-col items-center relative">
                <p className="z-10 md:text-base lg:text-lg">
                  {featuredEvent.longDescription
                    ? featuredEvent.longDescription
                    : featuredEvent.description}
                </p>
                <Quartercircle
                  width={windowSize.width >= breakpoints.md ? 150 : 75}
                  height={windowSize.width >= breakpoints.md ? 150 : 75}
                  color="fill-secondary-light"
                  className={`absolute md:block ${
                    windowSize.width >= breakpoints.md
                      ? "-right-20 -top-20"
                      : "-left-4 -bottom-4"
                  }`}
                />
              </div>
            </div>
          )}

          {upcomingEvents.length > 0 && (
            <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-16">
              {upcomingEvents &&
                upcomingEvents.map((item) => (
                  <EventCard key={item._id} event={item} />
                ))}
            </div>
          )}

          {pastEvents.length > 0 && (
            <>
              <h1 className="uppercase text-xl mb-8 mt-16">Past Events</h1>
              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                {pastEvents &&
                  pastEvents.map((item) => (
                    <EventCard key={item._id} event={item} />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>

      {page?.testimonials && (
        <TestimonialBlock
          testimonials={page.testimonials}
          question={page.question}
          highlight={page.highlight}
        />
      )}
    </>
  );
}

export async function getStaticProps() {
  const featuredEvent = await client.fetch(featuredEventQuery);
  const { upcomingEvents, pastEvents } = await client.fetch(eventsQuery, {
    featuredEventId: featuredEvent?._id,
  });
  const page = await client.fetch(testimonialsQuery, {
    slug: "community",
  });

  return {
    props: {
      upcomingEvents,
      pastEvents,
      featuredEvent,
      page,
    },
  };
}
