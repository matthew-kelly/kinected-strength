import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { DateTime } from "luxon";
import Button from "../../components/Button";
import { postQuery, postSlugsQuery } from "../../lib/queries";
import { urlForImage } from "../../lib/sanity";
import { client } from "../../lib/sanityClient";
import BlockImage from "../../components/BlockImage";

export default function BlogPost({ data }) {
  const post = data?.post;
  const prevPost = data?.prevPost;
  const nextPost = data?.nextPost;
  const date = DateTime.fromISO(post._createdAt);

  return (
    <>
      <Head>
        {/* TODO: confirm this is all the metadata required */}
        <title>{post.title} | Kinected Strength</title>
        {post?.mainImage && (
          <meta
            key="ogImage"
            property="og:image"
            content={urlForImage(post.mainImage)
              .width(1200)
              .height(627)
              .fit("crop")
              .url()}
          />
        )}
        {/* // FIXME: proper image layout */}
        {post?.description && (
          <meta name="description" content={post.description} />
        )}
      </Head>

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
              <span>{date.toLocaleString(DateTime.DATE_FULL)}</span>
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
  const { post, prevPost, nextPost } = await client.fetch(postQuery, {
    slug: params.slug,
  });

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
    fallback: false,
  };
}
