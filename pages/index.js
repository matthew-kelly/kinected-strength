import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import LogoSpinner from "@/components/LogoSpinner";
import TestimonialBlock from "@/components/TestimonialBlock";
import { breakpoints } from "@/utils/theme";
import bannerImg from "@/public/images/main-page-1.jpg";
import bannerImgMobile from "@/public/images/main-page-1-mobile.jpg";
import mainImg2 from "@/public/images/main-page-2.jpg";
import mainImg3 from "@/public/images/main-page-who-we-are.jpg";
// import mainImg3 from "@/public/images/main-page-3.jpg";
import mainImg4 from "@/public/images/main-page-4.jpg";
import { useWindowSize } from "@/lib/useWindowSize";
import { client } from "@/lib/sanityClient";
import { testimonialsQuery } from "@/lib/queries";
import MetaTags from "@/components/MetaTags";
import ButtonLink from "@/components/ButtonLink";

export default function Home({ page }) {
  const windowSize = useWindowSize();

  return (
    <>
      <MetaTags
        title="Home"
        description="Your home for kinesiology, strength training, and active rehab in North Vancouver."
        slug=""
        image={{ src: bannerImg.src, isExternal: false }}
      />

      {windowSize.width >= breakpoints.lg ? (
        <HomeBanner />
      ) : (
        <Image
          src={bannerImgMobile}
          priority
          sizes="100vw"
          // quality={80}
          alt="Briana, Andrea, and Jess walking along a dock"
          placeholder="blur"
          className="z-0 w-full h-auto"
        />
      )}

      <section className="bg-primary-dark flex flex-col relative z-10">
        <div className="flex flex-col bg-light-gray md:px-24 px-8 md:py-20 py-12 text-primary-dark">
          <div className="flex flex-col md:max-w-6xl md:mx-auto">
            <h1 className="lg:text-6xl md:text-5xl text-3xl !leading-normal md:!leading-snug lg:!leading-[1.3] tracking-wide">
              Your home for{" "}
              <span className="bg-secondary-light px-2 py-1">kinesiology</span>,{" "}
              <span className="bg-secondary-dark text-secondary-light px-2 py-1 whitespace-nowrap">
                strength training
              </span>
              , and{" "}
              <span className="bg-primary-light px-2 py-1 whitespace-nowrap">
                active rehab
              </span>{" "}
              in <span className="md:whitespace-nowrap">North Vancouver.</span>
            </h1>
          </div>

          <div className="flex gap-8 justify-around md:mt-16 mt-8">
            <ButtonLink
              href="/train-in-person"
              className="md:large whitespace-nowrap"
            >
              Train in person
            </ButtonLink>
            <ButtonLink
              href="/train-online"
              className="md:large light whitespace-nowrap"
            >
              Train online
            </ButtonLink>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col-reverse">
          <div className="sm:w-1/2 w-full relative overflow-hidden sm:h-auto h-[100vw]">
            <Image
              src={mainImg2}
              fill
              sizes={`(max-width: ${breakpoints.sm}px) 100vw,
              50vw`}
              quality={85}
              alt="Briana and Jess doing kettlebell exercises"
              placeholder="blur"
              className="object-cover object-center"
            />
          </div>
          <div className="sm:w-1/2 bg-primary-light flex flex-col justify-center md:gap-10 gap-8 p-8">
            <div className="flex justify-center md:gap-8 gap-4">
              <Link href="/train-in-person" legacyBehavior passHref>
                <m.a
                  className="relative bg-primary-dark cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg
                    viewBox="0 0 88 153"
                    className="fill-primary-dark w-full"
                  >
                    <rect width="88" height="153" />
                    <g transform="rotate(90)">
                      <text
                        x="10"
                        y="-10"
                        fontSize="10"
                        className="font-extrabold font-display tracking-wider fill-primary-light uppercase"
                      >
                        It&apos;s Strength
                      </text>
                    </g>
                  </svg>
                </m.a>
              </Link>
              <div className="flex flex-col md:gap-8 gap-4">
                <Link href="/blog" legacyBehavior passHref>
                  <m.a
                    className="relative flex justify-center items-end cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg
                      viewBox="0 0 445 204"
                      className="fill-secondary-light w-full"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 154L445 154C445 -51.3336 -1.07576e-05 -51.3336 0 154ZM-2.61955e-06 154L0 204L445 204V154L-2.61955e-06 154Z"
                      />
                      <text
                        x="50%"
                        y="80%"
                        fontSize="40"
                        textAnchor="middle"
                        className="font-extrabold font-display tracking-wider fill-primary-dark uppercase"
                      >
                        It&apos;s Education
                      </text>
                    </svg>
                  </m.a>
                </Link>
                <Link href="/community" legacyBehavior passHref>
                  <m.a
                    className="relative flex justify-center items-end cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg
                      viewBox="0 0 135 164"
                      className="fill-secondary-dark w-full"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 56L135 56C135 -18.6667 -3.26378e-06 -18.6667 0 56ZM-4.72083e-06 56L0 164H135V56L-4.72083e-06 56Z"
                      />
                      <text
                        x="50%"
                        y="90%"
                        fontSize="12"
                        textAnchor="middle"
                        className="font-extrabold font-display tracking-wider fill-secondary-light uppercase"
                      >
                        It&apos;s Community
                      </text>
                    </svg>
                  </m.a>
                </Link>
              </div>
            </div>

            <span className="text-primary-dark font-extrabold lg:text-5xl text-3xl text-center">
              It&apos;s more than fitness.
            </span>
          </div>
        </div>

        <div className="flex flex-col bg-light-gray md:px-24 px-8 md:py-20 py-12 text-primary-dark">
          <div className="flex flex-col md:mb-32 md:max-w-6xl md:mx-auto">
            {/* TODO: replace this text with new highlighted version */}
            <h2 className="lg:text-5xl md:text-4xl text-2xl md:mb-12 mb-8 md:max-w-5xl">
              Join a community of evidence-based strength training.
            </h2>
            <div className="flex md:flex-row flex-col md:gap-16 gap-8">
              <div className="lg:w-2/3 md:w-1/2">
                <Image
                  src={mainImg3}
                  // quality={80}
                  sizes={`(max-width: ${breakpoints.md}px) 100vw, 50vw`}
                  placeholder="blur"
                  alt="Briana, Jess, and Andrea flexing for the camera"
                />
              </div>
              <div className="lg:w-1/3 md:w-1/2 lg:ml-16">
                <h3 className="uppercase mb-4 text-lg font-extrabold">
                  Who we are
                </h3>
                <div className="flex flex-col gap-2">
                  <p>
                    We are a team of Kinesiologists and Personal Trainers in
                    North Vancouver dedicated to delivering exceptional strength
                    training and rehab services with a twist: community,
                    playfulness, and education.
                  </p>
                  <p>
                    Since joining forces in 2017, our synergy has only grown
                    stronger. United by shared values and coaching philosophies,
                    we love what we do and it is shown in the results.
                  </p>
                  <p>
                    We work with people who want to get stronger, feel more
                    confident and move better for life!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:pr-16 md:max-w-6xl md:mx-auto">
            <div className="flex md:flex-row flex-col-reverse md:gap-16 gap-8">
              <div className="md:w-1/2 lg:mr-16">
                <h3 className="uppercase mb-4 text-lg font-extrabold">
                  What we do
                </h3>
                <ul className="list-disc list-inside [&_li]:font-sans [&_li]:text-sm [&_li]:leading-6 [&_li]:font-normal [&_li]:mb-1">
                  <li>Evidence-based Personal Training and Kinesiology</li>
                  <li>Detailed Initial Assessments</li>
                  <li>Online Training</li>
                  <li>ICBC Active Rehab</li>
                  <li>Small Group Classes</li>
                  <li>Community Events</li>
                </ul>
              </div>
              <div className="md:w-1/2 relative flex md:flex-col flex-col-reverse">
                <div>
                  <Image
                    src={mainImg4}
                    // quality={80}
                    sizes={`(max-width: ${breakpoints.md}px) 100vw, 38vw`}
                    placeholder="blur"
                    alt="Jess doing a turkish get-up"
                  />
                </div>
                <div className="md:absolute md:-top-[100px] md:-right-[100px] self-center">
                  <LogoSpinner size="200" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {page?.testimonials && (
          <TestimonialBlock
            testimonials={page.testimonials}
            question={page.question}
            highlight={page.highlight}
          />
        )}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const page = await client.fetch(testimonialsQuery, {
    slug: "home",
  });

  return {
    props: {
      page,
    },
  };
}
