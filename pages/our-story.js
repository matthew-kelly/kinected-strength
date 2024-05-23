import Image from "next/image";
import PageBanner from "../components/PageBanner";
import bannerImg from "../public/images/our-story-1.jpg";
import bannerImgMobile from "../public/images/our-story-1-mobile.jpg";
import andreaImg from "../public/images/our-story-andrea.jpg";
import jessImg from "../public/images/our-story-jess.jpg";
import brianaImg from "../public/images/our-story-briana.jpg";
import { Circle } from "../components/shapes";
import TestimonialBlock from "../components/TestimonialBlock";
import {
  LayoutGroup,
  m,
  useAnimationControls,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../lib/useWindowSize";
import { breakpoints } from "../utils/theme";
import { client } from "../lib/sanityClient";
import { authorsQuery, testimonialsQuery } from "../lib/queries";
import MetaTags from "../components/MetaTags";
import { PortableText } from "@portabletext/react";

export default function OurStory({ page, team }) {
  const windowSize = useWindowSize();
  const reduceMotion = useReducedMotion();
  const isMobile = windowSize.width < breakpoints.sm;

  const dataAndrea = team.find(
    (member) => member._id === "6546d0cd-24ed-4569-b3ce-f6816858574a"
  );
  const dataJess = team.find(
    (member) => member._id === "8934489f-bed1-4946-b55e-d1a0c0133078"
  );
  const dataBriana = team.find(
    (member) => member._id === "0ef95911-ac60-4c6d-8a2d-5e0a361f38ca"
  );

  // Animation - options
  const inViewOptions = {
    once: true,
    amount: isMobile ? "some" : 0.2,
  };
  const variantsMain = {
    hidden: {
      opacity: 0,
      y: isMobile ? -100 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // staggerChildren: 1,
        delayChildren: isMobile ? 0 : 0.5,
        // delay: isMobile ? 0 : 0.3,
      },
    },
  };
  // Animation - Andrea
  const controlsAndrea = useAnimationControls();
  const refAndrea = useRef(null);
  const isInViewAndrea = useInView(refAndrea, inViewOptions);
  useEffect(() => {
    if (isInViewAndrea) {
      controlsAndrea.start("visible");
    }
  }, [controlsAndrea, isInViewAndrea]);

  // Animation - Jess
  const controlsJess = useAnimationControls();
  const refJess = useRef(null);
  const isInViewJess = useInView(refJess, inViewOptions);
  useEffect(() => {
    if (isInViewJess) {
      controlsJess.start("visible");
    }
  }, [controlsJess, isInViewJess]);

  // Animation - Bri
  const controlsBri = useAnimationControls();
  const refBri = useRef(null);
  const isInViewBri = useInView(refBri, inViewOptions);
  useEffect(() => {
    if (isInViewBri) {
      controlsBri.start("visible");
    }
  }, [controlsBri, isInViewBri]);

  return (
    <>
      <MetaTags
        title={page.title}
        description={`${page.bannerHeadline} ${page.bannerText}`}
        slug="our-story"
        image={{ src: bannerImg.src, isExternal: false }}
      />

      <div className="bg-primary-dark flex flex-col relative">
        <PageBanner
          image={bannerImg}
          mobileImage={bannerImgMobile}
          alt="Briana, Jess, and Andrea doing kettlebell exercises"
          title={page.title}
          headline={page.bannerHeadline}
          text={page.bannerText}
        />
      </div>
      <div className="flex flex-col bg-light-gray lg:px-24 md:px-16 px-8 md:py-20 md:pb-32 py-12 text-primary-dark overflow-hidden">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h1 className="uppercase text-xl mb-8">Meet the team</h1>

          <LayoutGroup>
            <m.div
              ref={refAndrea}
              animate={controlsAndrea}
              initial={reduceMotion ? "visible" : "hidden"}
              variants={variantsMain}
              className="relative md:max-w-4xl w-full flex flex-col lg:ml-24 lg:pr-8 md:mt-12 md:mb-12"
            >
              <h2 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-[40%] md:left-[25%] md:-translate-x-1/2 md:-top-12 z-20">
                <m.span
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : 100 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: isMobile ? 0 : 0.2 },
                    },
                  }}
                >
                  Andrea
                </m.span>
                <m.span
                  variants={
                    isMobile
                      ? {
                          visible: { opacity: 1, x: 0 },
                        }
                      : {
                          hidden: { opacity: 0, x: isMobile ? 0 : 100 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { delay: isMobile ? 0 : 0.4 },
                          },
                        }
                  }
                >
                  Brennan
                </m.span>
              </h2>
              <div className="flex md:flex-row flex-col md:gap-10 gap-4 z-10 md:mt-0 mt-4">
                <m.div
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : -200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="md:w-2/5 w-full"
                >
                  <Image
                    src={andreaImg}
                    quality={80}
                    sizes={`(max-width: ${breakpoints.md}px) 100vw, 33vw`}
                    placeholder="blur"
                    alt="Andrea Brennan"
                    className="w-full h-auto"
                  />
                </m.div>
                <m.div
                  variants={{
                    hidden: { opacity: 0, y: isMobile ? 0 : 200 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: isMobile ? 0 : 0.7 },
                    },
                  }}
                  className="md:w-3/5"
                >
                  <div className="h-16 lg:block hidden"></div>
                  {dataAndrea?.headline && (
                    <p className="text-lg font-display font-extrabold mb-4">
                      {dataAndrea.headline}
                    </p>
                  )}
                  <div className="prose prose-sm prose-p:my-2">
                    <PortableText value={dataAndrea.bio} />
                  </div>
                </m.div>
              </div>
              <m.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: isMobile ? 0 : 0.6 },
                  },
                }}
                className="absolute md:top-1/2 md:-translate-y-1/2 md:-left-24 top-full -translate-y-2/3 -left-16"
              >
                <Circle size={200} color="fill-secondary-light" />
              </m.div>
            </m.div>
          </LayoutGroup>

          <LayoutGroup>
            <m.div
              ref={refJess}
              animate={controlsJess}
              initial={reduceMotion ? "visible" : "hidden"}
              variants={variantsMain}
              className="relative md:max-w-4xl w-full flex flex-col md:self-end md:pt-0 pt-32 md:mt-24 lg:mr-24 lg:pl-8 md:mb-12"
            >
              <h2 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-[60%] md:left-[73%] left-2/3 md:-translate-x-1/2 md:-top-12 z-20">
                <m.span
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : -100 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: isMobile ? 0 : 0.2 },
                    },
                  }}
                >
                  Jess
                </m.span>
                <m.span
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : -100 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: isMobile ? 0 : 0.4 },
                    },
                  }}
                >
                  Pastro
                </m.span>
              </h2>
              <div className="flex md:flex-row-reverse flex-col md:gap-10 gap-4 z-10 md:mt-0 mt-4">
                <m.div
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="md:w-2/5 w-full"
                >
                  <Image
                    src={jessImg}
                    quality={80}
                    sizes={`(max-width: ${breakpoints.md}px) 100vw, 33vw`}
                    placeholder="blur"
                    alt="Jess Pastro"
                    className="w-full h-auto"
                  />
                </m.div>
                <m.div
                  variants={{
                    hidden: { opacity: 0, y: isMobile ? 0 : 200 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: isMobile ? 0 : 0.7 },
                    },
                  }}
                  className="md:w-3/5"
                >
                  <div className="h-16 lg:block hidden"></div>
                  {dataJess?.headline && (
                    <p className="text-lg font-display font-extrabold mb-4">
                      {dataJess.headline}
                    </p>
                  )}
                  <div className="prose prose-sm prose-p:my-2">
                    <PortableText value={dataJess.bio} />
                  </div>
                </m.div>
              </div>
              <m.svg
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0 } },
                }}
                viewBox="0 0 135 164"
                className="fill-primary-light w-48 absolute md:bottom-0 md:top-auto top-16 md:-translate-y-1/2 md:-right-32 -right-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 56L135 56C135 -18.6667 -3.26378e-06 -18.6667 0 56ZM-4.72083e-06 56L0 164H135V56L-4.72083e-06 56Z"
                />
              </m.svg>
            </m.div>
          </LayoutGroup>

          <LayoutGroup>
            <m.div
              ref={refBri}
              animate={controlsBri}
              initial={reduceMotion ? "visible" : "hidden"}
              variants={variantsMain}
              className="relative md:max-w-4xl w-full flex flex-col md:self-start lg:ml-24 lg:pr-8 md:mt-24 mb-12 md:pt-0 pt-32 "
            >
              <h2 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-[40%] md:left-[27%] md:-translate-x-1/2 md:-top-12 z-20">
                {/* flex md:flex-col md:gap-0 gap-2          md:text-5xl text-4xl md:absolute lg:left-[40%] md:left-[25%] lg:-translate-x-1/2 md:-translate-x-1/2 md:-top-12 z-20 */}
                <m.span
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : 100 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: isMobile ? 0 : 0.2 },
                    },
                  }}
                >
                  Briana
                </m.span>
                <m.span
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : 100 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: isMobile ? 0 : 0.4 },
                    },
                  }}
                >
                  Kelly
                </m.span>
              </h2>
              <div className="flex md:flex-row flex-col md:gap-10 gap-4 z-10 md:mt-0 mt-4">
                <m.div
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : -200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="md:w-2/5 w-full"
                >
                  <Image
                    src={brianaImg}
                    quality={80}
                    sizes={`(max-width: ${breakpoints.md}px) 100vw, 33vw`}
                    placeholder="blur"
                    alt="Briana Kelly"
                    className="w-full h-auto"
                  />
                </m.div>
                <m.div
                  variants={{
                    hidden: { opacity: 0, y: isMobile ? 0 : 200 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: isMobile ? 0 : 0.7 },
                    },
                  }}
                  className="md:w-3/5"
                >
                  <div className="h-16 lg:block hidden"></div>
                  {dataBriana?.headline && (
                    <p className="text-lg font-display font-extrabold mb-4">
                      {dataBriana.headline}
                    </p>
                  )}
                  <div className="prose prose-sm prose-p:my-2">
                    <PortableText value={dataBriana.bio} />
                  </div>
                </m.div>
              </div>
              <m.svg
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: isMobile ? 0 : 0.6 },
                  },
                }}
                viewBox="0 0 445 204"
                className="fill-secondary-dark absolute md:top-0 top-16 md:rotate-0 -rotate-90 md:-translate-y-1/2 translate-y-1/2 md:-left-32 -right-24 md:w-64 w-48"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 154L445 154C445 -51.3336 -1.07576e-05 -51.3336 0 154ZM-2.61955e-06 154L0 204L445 204V154L-2.61955e-06 154Z"
                />
              </m.svg>
            </m.div>
          </LayoutGroup>
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
    slug: "our-story",
  });
  const team = await client.fetch(authorsQuery);

  return {
    props: {
      page,
      team,
    },
  };
}
