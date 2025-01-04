import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { Circle } from "@/components/shapes";
import TestimonialBlock from "@/components/TestimonialBlock";
import DivInView from "@/components/DivInView";
import MetaTags from "@/components/MetaTags";
import ServiceTextBlock from "@/components/ServiceTextBlock";
import { client } from "@/lib/sanityClient";
import { testimonialsQuery } from "@/lib/queries";
import { breakpoints } from "@/utils/theme";
import bannerImg from "@/public/images/train-in-person.jpg";
import bannerImgMobile from "@/public/images/train-in-person-mobile.jpg";
import imgICBC from "@/public/images/services-ICBC.jpg";
import imgOnline from "@/public/images/services-online.jpg";
import imgPrivate from "@/public/images/services-private.jpg";

// TODO: update banner image and alt text

export default function TrainOnline({ page }) {
  return (
    <>
      <MetaTags
        title={page.title}
        description={`${page.bannerHeadline} ${page.bannerText}`}
        slug="train-online"
        image={{ src: bannerImg.src, isExternal: false }}
      />

      <section className="bg-primary-dark flex flex-col relative">
        <PageBanner
          image={bannerImg}
          mobileImage={bannerImgMobile}
          alt="Andrea, Briana, and Jess standing by the water"
          title={page.title}
          headline={page.bannerHeadline}
          text={page.bannerText}
        />
      </section>
      <section className="flex flex-col bg-light-gray lg:px-24 md:px-16 px-8 md:py-20 md:pb-32 py-12 text-primary-dark">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h2 className="uppercase text-xl mb-8 tracking-wider">
            What We Offer
          </h2>

          {/* TODO: update image, text, link */}
          <div className="relative flex md:flex-row flex-col justify-between items-center gap-8 mb-24">
            <ServiceTextBlock
              title="SUMMIT"
              subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
              body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
              link="/train-online/summit"
              linkText="UPDATE ME"
              buttonClass="light"
            />
            <DivInView>
              <Image
                src={imgPrivate}
                alt="Jess swinging a kettlebell"
                sizes={`(max-width: ${breakpoints.sm}px) 100vw, (max-width: ${breakpoints.md}px) 100vw, 325px`}
                placeholder="blur"
                className="w-full h-auto"
              />
            </DivInView>
          </div>

          {/* TODO: update image, text, link */}
          <div className="relative flex md:flex-row-reverse flex-col justify-between items-center gap-8 mb-24">
            <ServiceTextBlock
              title="Specialty Programs"
              subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
              body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
              link="/train-online/specialty-programs"
              linkText="UPDATE ME"
            />
            <DivInView>
              <Image
                src={imgICBC}
                alt="Briana holding a plank position"
                sizes={`(max-width: ${breakpoints.sm}px) 100vw, (max-width: ${breakpoints.md}px) 100vw, 325px`}
                placeholder="blur"
                className="w-full h-auto"
              />
            </DivInView>
          </div>

          {/* TODO: update image, text, link */}
          <div className="relative flex md:flex-row flex-col justify-between items-center gap-8 mb-24">
            <ServiceTextBlock
              title="Personalized Plans"
              subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
              body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
              link="/contact"
              linkText="UPDATE ME"
              buttonClass="inverse"
            />
            <DivInView>
              <Image
                src={imgOnline}
                alt="A kettlebell, water bottle, foam roller, and yoga mat on a dock"
                sizes={`(max-width: ${breakpoints.sm}px) 100vw, (max-width: ${breakpoints.md}px) 100vw, 325px`}
                placeholder="blur"
                className="w-full h-auto"
              />
            </DivInView>
          </div>
        </div>

        <div className="relative md:self-center md:mt-16 md:mb-0 mb-12 flex flex-col gap-8 md:max-w-3xl">
          <p className="md:text-xl text-lg font-semibold z-10 text-pretty">
            Even if you&apos;re a beginner to strength training, you&apos;re not
            on this journey alone; join our community of strong and confident
            members!
          </p>
          <Circle
            size={200}
            color="fill-secondary-light"
            className="absolute md:-top-24 -top-16 md:-left-24 -left-16"
          />
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
  const page = await client.fetch(testimonialsQuery, {
    slug: "train-online",
  });

  return {
    props: {
      page,
    },
  };
}
