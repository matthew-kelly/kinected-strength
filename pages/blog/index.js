import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import PageBanner from "@/components/PageBanner";
import TestimonialBlock from "@/components/TestimonialBlock";
import { client } from "@/lib/sanityClient";
import {
  allPostsCountQuery,
  allPostsQueryNextPage,
  allPostsQueryPagination,
  testimonialsQuery,
} from "@/lib/queries";
import bannerImg from "@/public/images/blog-banner.jpg";
import bannerImgMobile from "@/public/images/blog-banner-mobile.jpg";
import MetaTags from "@/components/MetaTags";

export default function Blog({ page, posts, count }) {
  const [allPosts, setAllPosts] = useState(posts);
  const [isLoading, setIsLoading] = useState(false);

  const getMorePosts = async () => {
    setIsLoading(true);
    const timestamp = allPosts[allPosts.length - 1].publishedDate;
    const morePosts = await client.fetch(allPostsQueryNextPage, {
      lastPublishedDate: timestamp,
    });
    const tempPosts = allPosts.concat(morePosts);
    setAllPosts(tempPosts);
    setIsLoading(false);
  };

  return (
    <>
      <MetaTags
        title={page.title}
        description={`${page.bannerHeadline} ${page.bannerText}`}
        slug="blog"
        image={{ src: bannerImg.src, isExternal: false }}
      />

      <section className="bg-primary-dark flex flex-col relative">
        <PageBanner
          image={bannerImg}
          mobileImage={bannerImgMobile}
          alt="Briana, Jess, and Andrea doing exercises with kettlebells"
          title={page.title}
          headline={page.bannerHeadline}
          text={page.bannerText}
        />
      </section>
      <section className="flex flex-col bg-light-gray md:px-24 px-8 md:py-20 py-8 md:pb-32 text-primary-dark">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h2 className="uppercase text-xl mb-8">Blog</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
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
      </section>

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
  }); // FIXME: rename in sanity?

  return {
    props: {
      posts,
      count,
      page,
    },
  };
}
