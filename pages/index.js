import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import { ScrollTriggerProvider } from "../components/ScrollTriggerProvider";
import HomeBanner from "../components/HomeBanner";
import LogoSpinner from "../components/LogoSpinner";
import TestimonialBlock from "../components/TestimonialBlock";
import { breakpoints } from "../utils/theme";
import bannerImg from "../public/images/main-page-1.jpg";
import mainImg2 from "../public/images/main-page-2.jpg";
import mainImg3 from "../public/images/main-page-3.jpg";
import mainImg4 from "../public/images/main-page-4.jpg";
import testimonialImg from "../public/temp/testimonial-sample.png"; // FIXME: get each image from db
import { useWindowSize } from "../lib/useWindowSize";

export default function Home() {
  const windowSize = useWindowSize();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Your home for kinesiology, strength training, and active rehab in North Vancouver."
        />
      </Head>

      {windowSize.width >= breakpoints.lg ? (
        <div id="bannerContainer" className="flex flex-col">
          <ScrollTriggerProvider options={{ end: "+=50%" }}>
            <HomeBanner />
          </ScrollTriggerProvider>
        </div>
      ) : (
        <Image
          src={bannerImg}
          layout="responsive"
          priority
          sizes="100vw"
          quality={90}
          alt="Briana, Andrea, and Jess walking along a dock"
          placeholder="blur"
          className="z-0"
        />
      )}

      <div className="bg-primary-dark flex flex-col relative z-10">
        {/* maybe not needed */}
        {/* TODO: have banner be floating at bottom of screen until you scroll past (on smaller devices) */}
        {/* <div className="px-16 py-12 flex justify-center">
        <h1 className="font-semibold text-3xl text-center text-secondary-light">
          Your home for kinesiology, strength training, and active rehab in
          North Vancouver<span className="text-secondary-dark">.</span>
        </h1>
      </div> */}

        <div className="flex sm:flex-row flex-col-reverse">
          <div className="sm:w-1/2 w-full relative overflow-hidden sm:h-auto h-[100vw]">
            <Image
              src={mainImg2}
              layout="fill"
              sizes={`(max-width: ${breakpoints.sm}px) 100vw,
            50vw`}
              quality={90}
              alt="Briana and Jess doing kettlebell exercises"
              placeholder="blur"
              className="object-cover object-center"
            />
          </div>
          <div className="sm:w-1/2 bg-primary-light flex flex-col justify-center md:gap-10 gap-8 p-8">
            <div className="flex justify-center md:gap-8 gap-4">
              <Link href="/strength" passHref legacyBehavior>
                <motion.div
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
                </motion.div>
              </Link>
              <div className="flex flex-col md:gap-8 gap-4">
                <Link href="/education" passHref legacyBehavior>
                  <motion.div
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
                  </motion.div>
                </Link>
                <Link href="/community" passHref legacyBehavior>
                  <motion.div
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
                  </motion.div>
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
            <h2 className="lg:text-6xl md:text-5xl text-3xl md:mb-12 mb-8 md:max-w-[580px]">
              Join a community of evidence-based strength training.
            </h2>
            <div className="flex md:flex-row flex-col md:gap-16 gap-8">
              <div className="lg:w-2/3 md:w-1/2">
                <Image
                  src={mainImg3}
                  layout="responsive"
                  quality={90}
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
                    We are a team of three kinesiologists in North Vancouver who
                    strive to create community and playfulness combined with
                    high quality strength training and rehab services.
                  </p>
                  <p>
                    Since starting to work together in 2017, we quickly
                    discovered we had a connection. Not only did our
                    personalities and values align, but so did our coaching
                    styles.
                  </p>
                  <p>We&apos;re three best friends who love what we do!</p>
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
                <p>
                  When you train with us you can expect evidence-based training
                  with a focus on movement quality. This includes individualized
                  mobility, motor control, balance, core, and strength work. Our
                  favorite tool is the kettlebell, as it addresses all of these
                  key pillars of health.
                </p>
              </div>
              <div className="md:w-1/2 relative flex md:flex-col flex-col-reverse">
                <div>
                  <Image
                    src={mainImg4}
                    layout="responsive"
                    quality={90}
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
        {/* FIXME: get from db */}
        <TestimonialBlock
          testimonial={{
            content: `"Briana is a patient, knowledgeable and motivating trainer. I am a 73-year-old with osteoporosis & scoliosis. When I started with Briana I couldn’t even get in and out of the bathtub, and I didn’t have the strength to pull on my tenser nylons. Now I can easily do these things and so much more! I recommend Briana highly. I just keep getting stronger and stronger with no injuries when I am training under her direction."`,
            author: "LT",
            image: testimonialImg,
          }}
        />
      </div>
    </>
  );
}
