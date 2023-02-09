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
} from "../../lib/queries";
import bannerImg from "../../public/images/education.jpg";
import testimonialImg from "../../public/temp/testimonial-sample.png"; // FIXME: get each image from db

export default function Education({ posts, count }) {
  // FIXME: source from database?
  const title = "Education";
  const tagline = `Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed diam nonummy nibh euismod tinci`;
  const text = `Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed diam nonummy nibh euismod tinci- dunt ut laoreet Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam`;
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
        <PageBanner image={image} title={title} tagline={tagline} text={text} />
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

      {/* FIXME: get from db */}
      <TestimonialBlock
        testimonial={{
          content: `"Briana is a patient, knowledgeable and motivating trainer. I am a 73-year-old with osteoporosis & scoliosis. When I started with Briana I couldn’t even get in and out of the bathtub, and I didn’t have the strength to pull on my tenser nylons. Now I can easily do these things and so much more! I recommend Briana highly. I just keep getting stronger and stronger with no injuries when I am training under her direction."`,
          author: "LT",
          image: testimonialImg,
        }}
        word="education"
      />
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(allPostsQueryPagination);
  const count = await client.fetch(allPostsCountQuery);

  return {
    props: {
      posts,
      count,
    },
  };
}
