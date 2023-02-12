import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Button from "../../components/Button";
import { postQuery, postSlugsQuery } from "../../lib/queries";
import { urlForImage } from "../../lib/sanity";
import { client } from "../../lib/sanityClient";
import BlockImage from "../../components/BlockImage";
import MetaTags from "../../components/MetaTags";
import { dateFormatter } from "../../utils/dateFormatter";

export default function BlogPost({ data }) {
  const post = data?.post;
  const prevPost = data?.prevPost;
  const nextPost = data?.nextPost;
  const date = dateFormatter(post._createdAt);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    image: urlForImage(post.mainImage).url(),
    datePublished: post._createdAt,
    publisher: {
      "@type": "Organization",
      name: "Kinected Strength",
    },
  };

  return (
    <>
      <MetaTags
        title={`${post.title} - Education`}
        description={post?.description}
        slug={`education/${post.slug}`}
        image={{
          src: urlForImage(post.mainImage)
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
            src={urlForImage(post.mainImage).width(1152).height(500).url()}
            width={1152}
            height={500}
            quality={90}
            placeholder="blur"
            blurDataURL={post.blur}
            alt={post.mainImage.alt}
          />

          <div className="flex flex-col relative mt-8">
            <h1 className="mb-6 md:text-5xl text-4xl mr-12">{post.title}</h1>
            <div className="flex justify-between border-b-primary-dark border-b-2 md:mb-16 mb-8 md:text-base text-sm">
              <span>{post.author}</span>
              <span>{date}</span>
            </div>
          </div>

          <div className="prose prose-sm prose-headings:mb-4 prose-headings:text-primary-dark lg:ml-24">
            <PortableText
              value={post.body}
              components={{
                types: {
                  image: ({ value }) => <BlockImage value={value} />,
                },
              }}
            />
          </div>

          <div className="md:my-12 my-8 w-full border-t-primary-dark border-t-2" />

          <div className="flex md:flex-row flex-col gap-4 md:justify-between md:mb-0 mb-2">
            {nextPost && (
              <Link href={nextPost.slug}>
                <Button>{nextPost.title}</Button>
              </Link>
            )}
            {prevPost && (
              <Link href={prevPost.slug} className="self-end">
                <Button>{prevPost.title}</Button>
              </Link>
            )}
          </div>
        </article>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await client.fetch(postQuery, {
    slug: params.slug,
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  const { post, prevPost, nextPost } = data;

  return {
    props: {
      data: {
        post,
        prevPost,
        nextPost,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await client.fetch(postSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
