import Image from "next/legacy/image";
import PageBanner from "../components/PageBanner";
import { Circle } from "../components/shapes";
import TestimonialBlock from "../components/TestimonialBlock";
import bannerImg from "../public/images/strength.jpg";
import imgICBC from "../public/images/services-ICBC.jpg";
import imgOnline from "../public/images/services-online.jpg";
import imgPhysio from "../public/images/services-physio-led.jpg";
import imgPrivate from "../public/images/services-private.jpg";
import DivInView from "../components/DivInView";
import { client } from "../lib/sanityClient";
import { testimonialsQuery } from "../lib/queries";
import MetaTags from "../components/MetaTags";

export default function Strength({ page }) {
  const image = {
    image: bannerImg,
    alt: "Andrea, Briana, and Jess standing by the water",
  };

  return (
    <>
      <MetaTags
        title={page.title}
        description={`${page.bannerHeadline} ${page.bannerText}`}
        slug="strength"
        image={{ src: bannerImg.src, isExternal: false }}
      />

      <div className="bg-primary-dark flex flex-col relative">
        <PageBanner
          image={image}
          title={page.title}
          headline={page.bannerHeadline}
          text={page.bannerText}
        />
      </div>
      <div className="flex flex-col bg-light-gray lg:px-24 md:px-16 px-8 md:py-20 md:pb-32 py-12 text-primary-dark">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h1 className="uppercase text-xl mb-8">Services</h1>

          <div className="relative flex md:flex-row flex-col justify-between md:gap-0 gap-8 md:mb-60 mb-24">
            <div className="lg:max-w-lg md:max-w-sm">
              <h2 className="md:text-5xl text-4xl md:mb-8 mb-4">
                Personal Training
              </h2>
              <p>
                Personal training with a kinesiologist is a supportive
                experience offered in-person in North Vancouver. This is the
                right choice for you if you have strength and fitness goals, are
                recovering from acute or chronic injury, or love the extra touch
                of personalized accountability.
              </p>
            </div>
            <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:self-auto self-center md:max-w-[250px]">
              <DivInView>
                <Image
                  src={imgPrivate}
                  alt="Jess swinging a kettlebell"
                  // sizes={`(max-width: ${breakpoints.md}px) 100vw, 250px`}
                  placeholder="blur"
                />
              </DivInView>
            </div>
          </div>

          <div className="relative flex md:flex-row-reverse flex-col justify-between md:gap-0 gap-8 xl:mr-16 md:mb-60 mb-24">
            <div className="lg:max-w-md md:max-w-xs">
              <h2 className="md:text-5xl text-4xl md:mb-8 mb-4">
                ICBC Active Rehabilitation
              </h2>
              <p>
                ICBC Active rehabilitation with a kinesiologist supports
                individuals suffering from injury or chronic pain due to a motor
                vehicle accident. We assess and design an exercise program to
                guide and reintroduce safe functional movement. We work closely
                with other practitioners on your care team to offer appropriate
                progressions, modifications and goals for your rehab. Direct
                billing through ICBC is available.
              </p>
            </div>
            <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:self-auto self-center lg:max-w-[325px] md:max-w-[300px]">
              <DivInView>
                <Image
                  src={imgICBC}
                  // sizes={`(max-width: ${breakpoints.md}px) 100vw, (max-width: ${breakpoints.lg}px) 300px, 325px`}
                  alt="Briana holding a plank position"
                  placeholder="blur"
                />
              </DivInView>
            </div>
          </div>

          <div className="relative flex md:flex-row flex-col justify-between md:gap-0 gap-8 md:mb-60 mb-24">
            <div className="lg:max-w-lg md:max-w-sm">
              <h2 className="md:text-5xl text-4xl md:mb-8 mb-4">
                Physio-Led Active Rehabilitation
              </h2>
              <p>
                Kinected Strength has partnered with{" "}
                <a
                  className="wavy font-medium"
                  href="https://thebalancedcollective.com/blogs/news/what-is-physiotherapy-led-active-rehab?_pos=1&_sid=e4940b102&_ss=r"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Balanced Collective
                </a>{" "}
                to provide physio-led active rehab. Begin with a high level
                assessment from a TBC physio then carry out your treatment plan
                in the gym with your Kinesiologist. Direct billing is available
                for Pacific Blue Cross insurance plans.
              </p>
            </div>
            <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:self-auto self-center md:max-w-[250px]">
              <DivInView>
                <Image
                  src={imgPhysio}
                  alt="Andrea swinging a kettlebell"
                  // sizes={`(max-width: ${breakpoints.md}px) 100vw, 250px`}
                  placeholder="blur"
                />
              </DivInView>
            </div>
          </div>

          <div className="relative flex md:flex-row-reverse flex-col justify-between md:gap-0 gap-8 xl:mr-16 md:mb-60 mb-24">
            <div className="lg:max-w-md md:max-w-xs">
              <h2 className="md:text-5xl text-4xl md:mb-8 mb-4">
                Online Training
              </h2>
              <p>
                Flexible options available via telehealth for private training
                or active rehabilitation. This is a great option for those who
                don’t live in North Vancouver. Remote program design and
                coaching available through Truecoach. This is ideal for those
                looking to add expert progressive programming to their
                independent training.
              </p>
            </div>
            <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:self-auto self-center lg:max-w-[325px] md:max-w-[300px]">
              <DivInView>
                <Image
                  src={imgOnline}
                  alt="A kettlebell, water bottle, foam roller, and yoga mat on a dock"
                  // sizes={`(max-width: ${breakpoints.md}px) 100vw,
                  //   (max-width: ${breakpoints.lg}px) 30vw,
                  //   35vw`}
                  placeholder="blur"
                />
              </DivInView>
            </div>
          </div>
        </div>

        <div className="relative md:self-center md:mt-16 md:mb-0 mb-12 flex flex-col gap-8 md:max-w-3xl">
          <p className="md:text-xl text-lg font-semibold z-10">
            We value education and provide specific and individualized
            programming. We believe there should always be &apos;why&apos;
            behind each exercise. By tailoring your program specifically to you
            we will streamline your results and support continued growth.
          </p>
          <p className="md:text-xl text-lg font-semibold z-10">
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
  const page = await client.fetch(testimonialsQuery, {
    slug: "strength",
  });

  return {
    props: {
      page,
    },
  };
}
