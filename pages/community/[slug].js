import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { DateTime } from "luxon";
import Button from "../../components/Button";
import { eventQuery, eventsSlugsQuery } from "../../lib/queries";
import { urlForImage } from "../../lib/sanity";
import { client } from "../../lib/sanityClient";
import { PortableText } from "@portabletext/react";
import BlockImage from "../../components/BlockImage";

export default function CommunityEvent({ event }) {
  const date = DateTime.fromISO(event.eventDate);

  return (
    <>
      <Head>
        {/* TODO: confirm this is all the metadata required */}
        <title>{event.title} | Kinected Strength</title>
        {
          event?.mainImage && (
            <meta
              key="ogImage"
              property="og:image"
              content={urlForImage(event.mainImage)
                .width(1200)
                .height(627)
                .fit("crop")
                .url()}
            />
          ) // FIXME: proper image layout
        }
        {event?.description && (
          <meta name="description" content={event.description} />
        )}
      </Head>

      <div className="flex flex-col bg-primary-dark text-primary-dark">
        <article className="flex flex-col bg-light-gray md:p-16 p-6 lg:mx-24 md:mx-8 mx-4 text-primary-dark relative self-center max-w-6xl">
          <Image
            src={urlForImage(event.mainImage).width(1152).height(500).url()}
            width={1152}
            height={500}
            quality={90}
            placeholder="blur"
            blurDataURL={event.blur}
            alt={event.mainImage.alt}
          />
          <div className="flex flex-col relative mt-8">
            <h1 className="mb-6 md:text-5xl text-4xl mr-12">{event.title}</h1>
            <div className="flex justify-between border-b-primary-dark border-b-2 md:mb-16 mb-8 md:text-base text-sm">
              <span>{date.toLocaleString(DateTime.DATE_FULL)}</span>
            </div>
          </div>

          <div className="prose prose-sm prose-headings:mb-4 prose-headings:text-primary-dark lg:ml-24">
            <PortableText
              value={event.body}
              components={{
                types: {
                  image: ({ value }) => <BlockImage value={value} />,
                },
              }}
            />
          </div>

          <div className="md:my-12 my-8 w-full border-t-primary-dark border-t-2" />
          <div className="md:self-start self-center md:mb-0 mb-2">
            <Link href="/community">
              <Button className="md:large">
                <span className="whitespace-nowrap">
                  &lt;&lt; Back to Events
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
    fallback: false,
  };
}
