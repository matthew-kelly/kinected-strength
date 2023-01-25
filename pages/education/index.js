import Image from "next/image";
import Link from "next/link";
import BlogCard from "../../components/BlogCard";
import Button from "../../components/Button";
import PageBanner from "../../components/PageBanner";
import TestimonialBlock from "../../components/TestimonialBlock";
import bannerImg from "../../public/temp/andrea-tgu-temp.png"; // FIXME: get from db
import grassImg from "../../public/temp/grass.png"; // FIXME: get from db

export default function Education() {
  // FIXME: source from database?
  const title = "Education";
  const tagline = `Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed diam nonummy nibh euismod tinci`;
  const text = `Lorem ipsum dolor sit amet, consectetuer adipi- scing elit, sed diam nonummy nibh euismod tinci- dunt ut laoreet Lorem ipsum dolor sit amet, con- sectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam`;
  const image = [{ url: bannerImg }, { url: bannerImg }];

  const post = {
    image: {
      url: grassImg,
    },
    title: "This is the title for a blog post",
    author: "Author Name",
    date: "December 1, 2022",
    slug: "examplepost",
  };
  return (
    <>
      <div className="bg-primary-dark flex flex-col relative">
        <PageBanner image={image} title={title} tagline={tagline} text={text} />
      </div>
      <div className="flex flex-col bg-light-gray md:px-24 px-8 md:py-20 py-8 mdpb-32 text-primary-dark">
        <h2 className="uppercase text-xl mb-8">Blog</h2>
        <div className="grid md:grid-cols-2 gap-16">
          {/* FIXME: get from db */}
          <BlogCard post={post} />
          <BlogCard post={post} />
          <BlogCard post={post} />
          <BlogCard post={post} />
        </div>
        <Button className="self-center md:mt-16 mt-8">View more</Button>
      </div>

      {/* FIXME: get from db */}
      <TestimonialBlock
        testimonials={[
          {
            content: `"Briana is a patient, knowledgeable and motivating trainer. I am a 73-year-old with osteoporosis & scoliosis. When I started with Briana I couldn’t even get in and out of the bathtub, and I didn’t have the strength to pull on my tenser nylons. Now I can easily do these things and so much more! I recommend Briana highly. I just keep getting stronger and stronger with no injuries when I am training under her direction."`,
            author: "LT",
          },
          {
            content: `“I have been working out in the garden for the last couple of days and I am thrilled with what I can do without pain! I can get up and down, no problem. I’m amazed at my progress in a few months. Thank you so much. You know what you’re doing and have helped me so much!”`,
            author: "CV",
          },
        ]}
      />
    </>
  );
}
