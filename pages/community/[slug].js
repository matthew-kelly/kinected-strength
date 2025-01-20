import Image from "next/image";
import { PortableText } from "@portabletext/react";
import BlockImage from "@/components/BlockImage";
import MetaTags from "@/components/MetaTags";
import BlockCTA from "@/components/BlockCTA";
import ButtonLink from "@/components/ButtonLink";
import { dateFormatter } from "@/utils/dateFormatter";
import { eventQuery, eventsSlugsQuery } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";
import { client } from "@/lib/sanityClient";
import ArticleContainer from "@/components/ArticleContainer";

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
    location: {
      "@type": "Place",
      name: event.eventLocation.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.eventLocation.address,
        addressLocality: event.eventLocation.city,
        addressRegion: event.eventLocation.province,
        addressCountry: event.eventLocation.country,
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Kinected Strength",
      url: `${process.env.NEXT_PUBLIC_SITE_PROTOCOL}${process.env.NEXT_PUBLIC_SITE_URL}`,
    },
  };

  if (endDate) {
    structuredData.endDate = endDate;
  }
  if (event?.eventLocation?.postalCode) {
    structuredData.location.address.postalCode = event.eventLocation.postalCode;
  }

  return (
    <>
      <MetaTags
        title={`${event.title}`}
        description={event?.description}
        slug={`community/${event.slug}`}
        image={{
          src: urlForImage(event.mainImage)
            .width(1200)
            .height(675)
            .fit("crop")
            .url(),
          isExternal: true,
        }}
        structuredData={structuredData}
      />

      <ArticleContainer>
        <Image
          src={urlForImage(event.mainImage).width(1152).height(648).url()}
          width={1152}
          height={648}
          quality={80}
          placeholder="blur"
          blurDataURL={event.blur}
          alt={event.mainImage.alt}
          sizes="100vw"
          className="w-full h-auto aspect-video"
        />
        <header className="flex flex-col relative mt-4 md:mt-8">
          <h1 className="md:mb-4 mb-2 md:text-5xl text-3xl">{event.title}</h1>
          <div className="flex justify-between border-b-primary-dark border-b-2 md:mb-8 mb-4 md:text-base text-sm">
            <span>
              {event.isOngoingEvent
                ? `${endDate ? `${date} - ${endDate}` : "Ongoing"}`
                : date}
            </span>
          </div>
        </header>

        <section className="prose prose-sm first:prose-headings:mt-0 prose-headings:mt-6 prose-headings:mb-4 prose-headings:text-primary-dark prose-strong:text-primary-dark prose-img:my-4 prose-p:mt-0 prose-p:mb-4 prose-ul:mt-0 prose-ul:mb-4 prose-li:marker:text-secondary-dark prose-li:pl-0 lg:ml-24">
          <PortableText
            value={event.body}
            components={{
              types: {
                image: ({ value }) => <BlockImage value={value} />,
                CTA: ({ value }) => <BlockCTA value={value} />,
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
        </section>

        <div className="md:my-12 my-8 w-full border-t-primary-dark border-t-2" />
        <div className="self-start md:mb-0 mb-2">
          <ButtonLink href="/community">
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
          </ButtonLink>
        </div>
      </ArticleContainer>
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
