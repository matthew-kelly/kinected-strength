import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import TestimonialBlock from "@/components/TestimonialBlock";
import DivInView from "@/components/DivInView";
import MetaTags from "@/components/MetaTags";
import ServiceTextBlock from "@/components/ServiceTextBlock";
import { client } from "@/lib/sanityClient";
import { testimonialsQuery } from "@/lib/queries";
import { breakpoints } from "@/utils/theme";
import bannerImg from "@/public/images/train-online-banner.jpg";
import bannerImgMobile from "@/public/images/train-online-banner-mobile.jpg";
import imgSUMMIT from "@/public/images/services-physio-led.jpg"; // TODO: new image
import imgSpecialty from "@/public/images/services-specialty-programs.jpg";
import imgPersonalized from "@/public/images/services-personalized-plans.jpg";

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
          alt="Andrea, Briana, and Jess each doing kettlebell exercises on a dock by the water, with the North Vancouver skyline in the background."
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

          <div className="relative flex md:flex-row flex-col justify-between items-start md:items-center gap-8 mb-24">
            <ServiceTextBlock
              title="SUMMIT"
              subtitle={`$59 / month`}
              body={`Our flagship 3-day per week functional strength program. Best suited for individuals who want to build strength and improve athletic performance. It is for people who train but lack consistency, accountability, and whose progress has plateaued.`}
              link="/train-online/summit"
              linkText="Tell Me More!"
              buttonClass="light"
            />
            <DivInView>
              <Image
                src={imgSUMMIT}
                alt="Andrea working out with a kettlebell. She is on a dock by the water with the North Vancouver skyline in the background."
                sizes={`(max-width: ${breakpoints.sm}px) 100vw, (max-width: ${breakpoints.md}px) 100vw, 325px`}
                placeholder="blur"
                className="w-full h-auto"
              />
            </DivInView>
          </div>

          <div className="relative flex md:flex-row-reverse flex-col justify-between items-start md:items-center gap-8 mb-24">
            <ServiceTextBlock
              title="Specialty Programs"
              subtitle={`Starting at $99`}
              body={`Training for a specific goal? Planning for ski season? Looking for support during your pregnancy? We have options for you.`}
              link="/train-online/specialty-programs"
              linkText="View All Programs"
            />
            <DivInView>
              <Image
                src={imgSpecialty}
                alt="Briana and Jess face to face and smiling, each holding a plank position."
                sizes={`(max-width: ${breakpoints.sm}px) 100vw, (max-width: ${breakpoints.md}px) 100vw, 325px`}
                placeholder="blur"
                className="md:w-full h-auto"
              />
            </DivInView>
          </div>

          <div className="relative flex md:flex-row flex-col justify-between items-start md:items-center gap-8">
            <ServiceTextBlock
              title="Personalized Plans"
              subtitle={`Starting at $99 / month`}
              body={`If you’re suffering from pain or injury or want an expert-built plan just for you.`}
              link="/contact"
              linkText="Get In Touch"
              buttonClass="inverse"
            />
            <DivInView>
              <Image
                src={imgPersonalized}
                alt="Three kettlebells on a yoga mat in front of a person standing, ready to work out."
                sizes={`(max-width: ${breakpoints.sm}px) 100vw, (max-width: ${breakpoints.md}px) 100vw, 500px`}
                placeholder="blur"
                className="w-full h-auto"
              />
            </DivInView>
          </div>
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
