import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
import { eventQuery, eventsSlugsQuery } from "../../lib/queries";
import { urlForImage } from "../../lib/sanity";
import { client } from "../../lib/sanityClient";
import { PortableText } from "@portabletext/react";
import BlockImage from "../../components/BlockImage";
import MetaTags from "../../components/MetaTags";
import { dateFormatter } from "../../utils/dateFormatter";
import { breakpoints } from "../../utils/theme";

export default function CommunityEvent({ event }) {
  const date = dateFormatter(event.eventDate);
  let endDate;
  if (event.isOngoingEvent && event.endDate) {
    endDate = dateFormatter(event.endDate);
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    image: urlForImage(event.mainImage).url(),
    startDate: event.eventDate,
    organizer: {
      "@type": "Organization",
      name: "Kinected Strength",
    },
  };

  if (endDate) {
    structuredData.endDate = endDate;
  }

  return (
    <>
      <MetaTags
        title={`${event.title}`}
        description={event?.description}
        slug={`education/${event.slug}`}
        image={{
          src: urlForImage(event.mainImage)
            .width(1200)
            .height(627)
            .fit("crop")
            .url(),
          isExternal: true,
        }}
        structuredData={structuredData}
      />

      <div className="flex flex-col bg-primary-dark text-primary-dark">
        <article className="flex flex-col bg-light-gray md:p-16 p-6 lg:mx-24 md:mx-8 mx-4 text-primary-dark relative self-center max-w-6xl">
          <Image
            src={urlForImage(event.mainImage).width(1152).height(500).url()}
            width={1152}
            height={500}
            quality={80}
            placeholder="blur"
            blurDataURL={event.blur}
            alt={event.mainImage.alt}
            sizes="100vw"
            className="w-full h-auto"
          />
          <div className="flex flex-col relative mt-2 md:mt-8">
            <h1 className="md:mb-4 mb-1 md:text-5xl text-3xl">{event.title}</h1>
            <div className="flex justify-between border-b-primary-dark border-b-2 md:mb-8 mb-4 md:text-base text-sm">
              <span>
                {event.isOngoingEvent
                  ? `${endDate ? `${date} - ${endDate}` : "Ongoing"}`
                  : date}
              </span>
            </div>
          </div>

          <div className="prose prose-sm prose-headings:mt-6 prose-headings:mb-4 prose-headings:text-primary-dark prose-strong:text-primary-dark prose-img:my-2 md:prose-img:my-4 prose-p:mt-0 prose-p:mb-2 md:prose-p:mb-4 prose-ul:mt-0 prose-ul:mb-2 md:prose-ul:mb-4 prose-li:pl-0 lg:ml-24">
            <PortableText
              value={event.body}
              components={{
                types: {
                  image: ({ value }) => <BlockImage value={value} />,
                },
                marks: {
                  link: ({ value, children }) => {
                    const { external, href } = value;
                    return external ? (
                      <a href={href} target="_blank" rel="noreferrer">
                        {children}
                      </a>
                    ) : (
                      <a href={href}>{children}</a>
                    );
                  },
                },
              }}
            />
          </div>

          <div className="md:my-12 my-8 w-full border-t-primary-dark border-t-2" />
          <div className="self-start md:mb-0 mb-2">
            <Link href="/community">
              <Button className="md:large">
                <span className="whitespace-nowrap flex items-center gap-1">
                  <svg
                    className="w-6 md:w-8 fill-secondary-light"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>chevron-left</title>
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                  </svg>
                  Back to Events
                </span>
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const event = await client.fetch(eventQuery, {
    slug: params.slug,
  });

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths() {
  const paths = await client.fetch(eventsSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
