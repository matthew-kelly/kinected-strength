import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import BlockImage from "@/components/BlockImage";
import MetaTags from "@/components/MetaTags";
import BlockCTA from "@/components/BlockCTA";
import {
  specialtyProgramQuery,
  specialtyProgramsSlugsQuery,
} from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";
import { client } from "@/lib/sanityClient";
import { formatPrice } from "@/utils/formatPrice";

export default function ProgramPost({ program }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: program.title,
    description: program.subtitle,
    image: urlForImage(program.mainImage).url(),
    offers: {
      "@type": "Offer",
      price: formatPrice(program.price, false),
      priceCurrency: "CAD",
    },
  };

  return (
    <>
      <MetaTags
        title={`${program.title}`}
        description={program?.subtitle}
        slug={`train-online/specialty-programs/${program.slug}`}
        image={{
          src: urlForImage(program.mainImage)
            .width(1200)
            .height(675)
            .fit("crop")
            .url(),
          isExternal: true,
        }}
        structuredData={structuredData}
      />
      <div className="flex flex-col bg-primary-dark text-primary-dark">
        <article className="flex flex-col bg-light-gray md:p-16 p-6 lg:mx-24 md:mx-8 mx-4 text-primary-dark relative self-center max-w-6xl">
          <Link
            href="/train-online/specialty-programs"
            className="group flex items-center -ml-2.5 md:ml-0 -mt-3.5 md:mt-0 mr-auto pb-2 md:pt-2 md:absolute md:top-3.5 md:left-3.5"
          >
            <svg
              className="w-6 fill-primary-dark group-hover:fill-secondary-dark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>chevron-left</title>
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
            <span className="font-bold text-sm md:text-base text-primary-dark group-hover:text-secondary-dark md:mt-0.5">
              All Specialty Programs
            </span>
          </Link>
          <Image
            src={urlForImage(program.mainImage).width(1152).height(648).url()}
            width={1152}
            height={648}
            quality={80}
            placeholder="blur"
            blurDataURL={program.blur}
            alt={program.mainImage.alt}
            sizes="100vw"
            className="w-full h-auto aspect-video"
          />

          <div className="flex flex-col relative mt-4 md:mt-8 border-b-primary-dark border-b-2 pb-2 mb-4 md:mb-8">
            <h1 className="md:mb-4 mb-2 md:text-5xl text-3xl">
              {program.title}
            </h1>
            <p className="text-pretty">{program.subtitle}</p>
            <p className="font-semibold text-base self-end">
              {formatPrice(program.price)}
            </p>
          </div>

          <div className="prose prose-sm first:prose-headings:mt-0 prose-headings:mt-6 prose-headings:mb-4 prose-headings:text-primary-dark prose-strong:text-primary-dark prose-img:my-4 prose-p:mt-0 prose-p:mb-4 prose-ul:mt-0 prose-ul:mb-4 prose-li:marker:text-secondary-dark prose-li:pl-0 mx-auto w-full">
            <PortableText
              value={program.body}
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
          </div>
        </article>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const program = await client.fetch(specialtyProgramQuery, {
    slug: params.slug,
  });

  if (!program) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      program,
    },
  };
}

export async function getStaticPaths() {
  const paths = await client.fetch(specialtyProgramsSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
