import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import bannerImg from "@/public/images/our-story-banner.jpg";
import bannerImgMobile from "@/public/images/our-story-banner-mobile.jpg";
import andreaImg from "@/public/images/our-story-andrea.jpg";
import jessImg from "@/public/images/our-story-jess.jpg";
import brianaImg from "@/public/images/our-story-briana.jpg";
import geoffImg from "@/public/images/our-story-geoff.jpg";
import daveImg from "@/public/images/our-story-dave.jpg";
import christinaImg from "@/public/images/our-story-christina.jpg";
import { Circle } from "@/components/shapes";
import TestimonialBlock from "@/components/TestimonialBlock";
import {
  LayoutGroup,
  m,
  useAnimationControls,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@/lib/useWindowSize";
import { breakpoints } from "@/utils/theme";
import { client } from "@/lib/sanityClient";
import { authorsQuery, testimonialsQuery } from "@/lib/queries";
import MetaTags from "@/components/MetaTags";
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
  const dataGeoff = team.find(
    (member) => member._id === "d8b68a7a-0416-44c7-aafd-22094c3a20b2"
  );
  const dataDave = team.find(
    (member) => member._id === "d53e13b2-70d2-449b-b80d-a4991505ae97"
  );
  const dataChristina = team.find(
    (member) => member._id === "d613f429-f833-4a4c-a4f9-1838f60c1a5e"
  );

  // Animation - options
  const inViewOptions = {
    once: true,
    amount: isMobile ? "some" : 0.1,
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

  // Animation - Geoff
  const controlsGeoff = useAnimationControls();
  const refGeoff = useRef(null);
  const isInViewGeoff = useInView(refGeoff, inViewOptions);
  useEffect(() => {
    if (isInViewGeoff) {
      controlsGeoff.start("visible");
    }
  }, [controlsGeoff, isInViewGeoff]);

  // Animation - Dave
  const controlsDave = useAnimationControls();
  const refDave = useRef(null);
  const isInViewDave = useInView(refDave, inViewOptions);
  useEffect(() => {
    if (isInViewDave) {
      controlsDave.start("visible");
    }
  }, [controlsDave, isInViewDave]);

  // Animation - Christina
  const controlsChristina = useAnimationControls();
  const refChristina = useRef(null);
  const isInViewChristina = useInView(refChristina, inViewOptions);
  useEffect(() => {
    if (isInViewChristina) {
      controlsChristina.start("visible");
    }
  }, [controlsChristina, isInViewChristina]);

  return (
    <>
      <MetaTags
        title={page.title}
        description={`${page.bannerHeadline} ${page.bannerText}`}
        slug="our-story"
        image={{ src: bannerImg.src, isExternal: false }}
      />

      <section className="bg-primary-dark flex flex-col relative">
        <PageBanner
          image={bannerImg}
          mobileImage={bannerImgMobile}
          alt="Briana, Jess, and Andrea doing kettlebell exercises"
          title={page.title}
          headline={page.bannerHeadline}
          text={page.bannerText}
        />
      </section>
      <section className="flex flex-col bg-light-gray lg:px-24 md:px-16 px-8 md:py-20 md:pb-32 py-12 text-primary-dark overflow-hidden">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h2 className="uppercase text-xl mb-8 tracking-wider">
            Meet the founders
          </h2>

          <LayoutGroup>
            <m.div
              ref={refAndrea}
              animate={controlsAndrea}
              initial={reduceMotion ? "visible" : "hidden"}
              variants={variantsMain}
              className="relative md:max-w-4xl w-full flex flex-col lg:ml-24 lg:pr-8 md:mt-12 md:mb-12"
            >
              <h3 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-[40%] md:left-[25%] md:-translate-x-1/2 md:-top-12 z-20 font-extrabold">
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
              </h3>
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
                  <div className="prose prose-sm prose-p:mt-0 prose-p:mb-4">
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
                className="absolute md:top-1/2 md:-translate-y-1/2 md:-left-24 top-full -translate-y-3/4 -left-16"
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
              className="relative md:max-w-4xl w-full flex flex-col md:self-end md:pt-0 pt-24 md:mt-24 lg:mr-24 lg:pl-8 md:mb-12"
            >
              <h3 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-[60%] md:left-[73%] left-2/3 md:-translate-x-1/2 md:-top-12 z-20 font-extrabold">
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
              </h3>
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
                  <div className="prose prose-sm prose-p:mt-0 prose-p:mb-4">
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
              className="relative md:max-w-4xl w-full flex flex-col md:self-start lg:ml-24 lg:pr-8 md:mt-24 mb-12 md:pt-0 pt-16"
            >
              <h3 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-[40%] md:left-[27%] md:-translate-x-1/2 md:-top-12 z-20 font-extrabold">
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
              </h3>
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
                  <div className="prose prose-sm prose-p:mt-0 prose-p:mb-4">
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

          <h2 className="uppercase text-xl mb-8 mt-8 tracking-wider">
            Meet the team
          </h2>

          <LayoutGroup>
            <m.div
              ref={refDave}
              animate={controlsDave}
              initial={reduceMotion ? "visible" : "hidden"}
              variants={variantsMain}
              className="relative md:max-w-4xl w-full flex flex-col md:self-end md:pt-0 md:mt-24 lg:mr-24 lg:pl-8 md:mb-12"
            >
              <h3 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-[60%] md:left-[73%] left-2/3 md:-translate-x-1/2 md:-top-12 z-20 font-extrabold">
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
                  David
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
                  Ewart
                </m.span>
              </h3>
              <div className="flex md:flex-row-reverse flex-col md:gap-10 gap-4 z-10 md:mt-0 mt-4">
                <m.div
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="md:w-2/5 w-full"
                >
                  <Image
                    src={daveImg}
                    quality={80}
                    sizes={`(max-width: ${breakpoints.md}px) 100vw, 33vw`}
                    placeholder="blur"
                    alt="David Ewart"
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
                  {dataDave?.headline && (
                    <p className="text-lg font-display font-extrabold mb-4">
                      {dataDave.headline}
                    </p>
                  )}
                  <div className="prose prose-sm prose-p:mt-0 prose-p:mb-4">
                    <PortableText value={dataDave.bio} />
                  </div>
                </m.div>
              </div>
              <m.svg
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0 } },
                }}
                viewBox="0 0 135 164"
                className="fill-secondary-dark w-48 absolute md:bottom-0 md:top-auto top-0 md:-translate-y-1/2 md:-right-32 -right-6"
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
              ref={refGeoff}
              animate={controlsGeoff}
              initial={reduceMotion ? "visible" : "hidden"}
              variants={variantsMain}
              className="relative md:max-w-4xl w-full flex flex-col lg:ml-24 lg:pr-8 md:mt-12 md:mb-12 md:pt-0 pt-16"
            >
              <h3 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-[40%] md:left-[25%] md:-translate-x-1/2 md:-top-12 z-20 font-extrabold">
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
                  Geoffrey
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
                  Soo
                </m.span>
              </h3>
              <div className="flex md:flex-row flex-col md:gap-10 gap-4 z-10 md:mt-0 mt-4">
                <m.div
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : -200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="md:w-2/5 w-full"
                >
                  <Image
                    src={geoffImg}
                    quality={80}
                    sizes={`(max-width: ${breakpoints.md}px) 100vw, 33vw`}
                    placeholder="blur"
                    alt="Geoffrey Soo"
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
                  {dataGeoff?.headline && (
                    <p className="text-lg font-display font-extrabold mb-4">
                      {dataGeoff.headline}
                    </p>
                  )}
                  <div className="prose prose-sm prose-p:mt-0 prose-p:mb-4">
                    <PortableText value={dataGeoff.bio} />
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
                className="absolute md:top-1/2 md:-translate-y-1/2 md:-left-24 top-48 -translate-y-3/4 -left-16"
              >
                <Circle size={200} color="fill-secondary-light" />
              </m.div>
            </m.div>
          </LayoutGroup>

          <LayoutGroup>
            <m.div
              ref={refChristina}
              animate={controlsChristina}
              initial={reduceMotion ? "visible" : "hidden"}
              variants={variantsMain}
              className="relative md:max-w-4xl w-full flex flex-col md:self-end md:pt-0 pt-24 md:mt-24 lg:mr-24 lg:pl-8 md:mb-12"
            >
              <h3 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-[60%] md:left-[73%] left-2/3 md:-translate-x-1/2 md:-top-12 z-20 font-extrabold">
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
                  Christina
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
                  Carrick
                </m.span>
              </h3>
              <div className="flex md:flex-row-reverse flex-col md:gap-10 gap-4 z-10 md:mt-0 mt-4">
                <m.div
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="md:w-2/5 w-full"
                >
                  <Image
                    src={christinaImg}
                    quality={80}
                    sizes={`(max-width: ${breakpoints.md}px) 100vw, 33vw`}
                    placeholder="blur"
                    alt="Christina Carrick"
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
                  {dataChristina?.headline && (
                    <p className="text-lg font-display font-extrabold mb-4">
                      {dataChristina.headline}
                    </p>
                  )}
                  <div className="prose prose-sm prose-p:mt-0 prose-p:mb-4">
                    <PortableText value={dataChristina.bio} />
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
                className="fill-primary-light absolute md:top-0 top-16 md:rotate-0 -rotate-90 md:-translate-y-1/2 translate-y-1/2 md:-right-32 -right-24 md:w-64 w-48"
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
