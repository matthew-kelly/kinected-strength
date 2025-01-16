import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import TestimonialBlock from "@/components/TestimonialBlock";
import DivInView from "@/components/DivInView";
import ServiceTextBlock from "@/components/ServiceTextBlock";
import MetaTags from "@/components/MetaTags";
import { client } from "@/lib/sanityClient";
import { testimonialsQuery } from "@/lib/queries";
import { breakpoints } from "@/utils/theme";
import bannerImg from "@/public/images/train-in-person.jpg";
import bannerImgMobile from "@/public/images/train-in-person-mobile.jpg";
import imgICBC from "@/public/images/services-ICBC.jpg";
import imgOnline from "@/public/images/services-online.jpg";
import imgPrivate from "@/public/images/services-private.jpg";

export default function TrainInPerson({ page }) {
  return (
    <>
      <MetaTags
        title={page.title}
        description={`${page.bannerHeadline} ${page.bannerText}`}
        slug="train-in-person"
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
          <h2 className="uppercase text-xl mb-8 tracking-wider">Services</h2>

          <div className="relative flex md:flex-row flex-col justify-between items-center gap-8 mb-24">
            <ServiceTextBlock
              title="Personal Training"
              subtitle={`Offered by BCAK registered kinesiologists and personal trainers`}
              body={`Personal training is a supportive experience offered in-person in North Vancouver. This is the right choice for you if you have strength and fitness goals, are recovering from acute or chronic injury, or love the extra touch of personalized accountability.`}
              link="/contact"
              linkText="Start your journey"
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

          <div className="relative flex md:flex-row-reverse flex-col justify-between items-center gap-8 mb-24">
            <ServiceTextBlock
              title={`ICBC Active Rehabilitation`}
              subtitle={`Direct billing through ICBC is available. Use fee $35 + GST.`}
              body={`ICBC Active rehabilitation with a kinesiologist supports individuals suffering from injury or chronic pain due to a motor vehicle accident. We assess and design an exercise program to guide and reintroduce safe functional movement. We work closely with other practitioners on your care team to offer appropriate progressions, modifications and goals for your rehab.`}
              link="/contact"
              linkText="Get started now"
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

          <div className="relative flex md:flex-row flex-col justify-between items-center gap-8">
            <ServiceTextBlock
              title={`Group Classes`}
              subtitle={`All levels welcome!`}
              body={`Classes available 6 days per week. Smaller class sizes, expert coaching and guidance to help you achieve your goals. Even if you're a beginner to strength training, you're not on this journey alone; join our community of strong and confident members!`}
              link="https://www.shypractice.ca/whatwedoyoga"
              linkText="Book your class today"
              newTab={true}
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
    slug: "strength", // FIXME: rename in sanity?
  });

  return {
    props: {
      page,
    },
  };
}
