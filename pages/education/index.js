import { useState } from "react";
import Head from "next/head";
import BlogCard from "../../components/BlogCard";
import Button from "../../components/Button";
import PageBanner from "../../components/PageBanner";
import TestimonialBlock from "../../components/TestimonialBlock";
import { client } from "../../lib/sanityClient";
import {
  allPostsCountQuery,
  allPostsQueryNextPage,
  allPostsQueryPagination,
  testimonialsQuery,
} from "../../lib/queries";
import bannerImg from "../../public/images/education.jpg";

export default function Education({ page, posts, count }) {
  const image = {
    image: bannerImg,
    alt: "Briana, Jess, and Andrea doing exercises with kettlebells",
  };

  const [allPosts, setAllPosts] = useState(posts);
  const [isLoading, setIsLoading] = useState(false);

  const getMorePosts = async () => {
    setIsLoading(true);
    const timestamp = allPosts[allPosts.length - 1]._createdAt;
    const morePosts = await client.fetch(allPostsQueryNextPage, {
      lastCreatedAt: timestamp,
    });
    const tempPosts = allPosts.concat(morePosts);
    setAllPosts(tempPosts);
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Education | Kinected Strength</title>
        {/* <meta name="description" content="" /> */}
      </Head>
      <div className="bg-primary-dark flex flex-col relative">
        <PageBanner
          image={image}
          title={page.title}
          headline={page.bannerHeadline}
          text={page.bannerText}
        />
      </div>
      <div className="flex flex-col bg-light-gray md:px-24 px-8 md:py-20 py-8 mdpb-32 text-primary-dark">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h2 className="uppercase text-xl mb-8">Blog</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {allPosts &&
              allPosts.map((post) => <BlogCard key={post._id} post={post} />)}
          </div>
          {allPosts.length < count && (
            <Button
              className="self-center md:mt-16 mt-8"
              onClick={getMorePosts}
              isLoading={isLoading}
            >
              View more
            </Button>
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
  const posts = await client.fetch(allPostsQueryPagination);
  const count = await client.fetch(allPostsCountQuery);
  const page = await client.fetch(testimonialsQuery, {
    slug: "education",
  });

  return {
    props: {
      posts,
      count,
      page,
    },
  };
}
