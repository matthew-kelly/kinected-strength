import Image from "next/image";
import PageBanner from "../components/PageBanner";
import bannerImg from "../public/images/our-story-1.jpg";
import andreaImg from "../public/images/our-story-andrea.jpg";
import jessImg from "../public/images/our-story-jess.jpg";
import brianaImg from "../public/images/our-story-briana.jpg";
import testimonialImg from "../public/temp/testimonial-sample.png"; // FIXME: get each image from db
import { Circle } from "../components/shapes";
import TestimonialBlock from "../components/TestimonialBlock";
import {
  LayoutGroup,
  motion,
  useAnimationControls,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../lib/useWindowSize";
import { breakpoints } from "../utils/theme";

export default function OurStory() {
  const windowSize = useWindowSize();
  const reduceMotion = useReducedMotion();
  const isMobile = windowSize.width < breakpoints.sm;

  // Animation - options
  const inViewOptions = {
    once: true,
    amount: isMobile ? "some" : 0.5,
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

  // FIXME: source from database?
  const title = "Our Story";
  const tagline = "Three Kinesiologists building a community of strength.";
  const text = `Andrea, Bri and Jess have 25+ combined years experience working in the field. We believe that quality training should be available to everyone no matter their level of fitness or experience.`;
  return (
    <>
      <div className="bg-primary-dark flex flex-col relative">
        <PageBanner
          image={{ image: bannerImg, alt: "" }}
          title={title}
          tagline={tagline}
          text={text}
        />
      </div>
      <div className="flex flex-col bg-light-gray lg:px-24 md:px-16 px-8 md:py-20 md:pb-32 py-12 text-primary-dark">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h1 className="uppercase text-xl mb-8">Meet the team</h1>

          <LayoutGroup>
            <motion.div
              ref={refAndrea}
              animate={controlsAndrea}
              initial={reduceMotion ? "visible" : "hidden"}
              variants={variantsMain}
              className="relative md:max-w-2xl flex flex-col md:ml-24 md:mt-12 md:mb-24"
            >
              <h2 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-1/2 md:left-1/3 lg:-translate-x-1/2 md:-translate-x-1/2 md:-top-12 z-20">
                <motion.span
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
                </motion.span>
                <motion.span
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
                </motion.span>
              </h2>
              <div className="flex md:items-center md:flex-row flex-col md:gap-10 gap-4 z-10 md:mt-0 mt-4">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : -200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="md:w-1/2 w-full"
                >
                  <Image
                    layout="responsive"
                    src={andreaImg}
                    quality={90}
                    sizes={`(max-width: ${breakpoints.md}px) 100vw, 50vw`}
                    placeholder="blur"
                    alt="Andrea Brennan"
                  />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: isMobile ? 0 : 200 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: isMobile ? 0 : 0.7 },
                    },
                  }}
                  className="md:w-1/2"
                >
                  <p className="text-lg font-display font-extrabold mb-4">
                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    Lorem ipsum dolor sit
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipi- scing elit,
                    sed diam nonummy nibh euismod tinci- dunt ut laoreet Lorem
                    ipsum dolor sit amet, con- sectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet
                  </p>
                </motion.div>
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: isMobile ? 0 : 0.6 },
                  },
                }}
              >
                <Circle
                  size={200}
                  color="fill-secondary-light"
                  className="absolute md:-bottom-24 -bottom-16 md:-left-24 -left-16"
                />
              </motion.div>
            </motion.div>
          </LayoutGroup>

          <LayoutGroup>
            <motion.div
              ref={refJess}
              animate={controlsJess}
              initial={reduceMotion ? "visible" : "hidden"}
              variants={variantsMain}
              className="relative md:max-w-2xl flex flex-col md:self-end md:pt-0 pt-32 md:mt-32 md:mr-24 md:mb-24"
            >
              <h2 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-1/2 left-2/3 lg:-translate-x-1/2 md:-translate-x-2/3 md:-top-12 z-20">
                <motion.span
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
                </motion.span>
                <motion.span
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
                </motion.span>
              </h2>
              <div className="flex md:items-center md:flex-row-reverse flex-col md:gap-10 gap-4 z-10 md:mt-0 mt-4">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="md:w-1/2 w-full"
                >
                  <Image
                    layout="responsive"
                    src={jessImg}
                    quality={90}
                    sizes={`(max-width: ${breakpoints.md}px) 100vw, 50vw`}
                    placeholder="blur"
                    alt="Jess Pastro"
                  />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: isMobile ? 0 : 200 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: isMobile ? 0 : 0.7 },
                    },
                  }}
                  className="md:w-1/2"
                >
                  <p className="text-lg font-display font-extrabold mb-4">
                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    Lorem ipsum dolor sit
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipi- scing elit,
                    sed diam nonummy nibh euismod tinci- dunt ut laoreet Lorem
                    ipsum dolor sit amet, con- sectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet
                  </p>
                </motion.div>
              </div>
              <motion.svg
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
              </motion.svg>
            </motion.div>
          </LayoutGroup>

          <LayoutGroup>
            <motion.div
              ref={refBri}
              animate={controlsBri}
              initial={reduceMotion ? "visible" : "hidden"}
              variants={variantsMain}
              className="relative md:max-w-2xl flex flex-col md:self-start md:ml-24 md:mt-32 mb-12 md:pt-0 pt-32 "
            >
              <h2 className="flex md:flex-col md:gap-0 gap-2 md:text-5xl text-4xl md:absolute lg:left-1/2 md:left-1/3 lg:-translate-x-1/2 md:-translate-x-1/3 md:-top-12 z-20">
                <motion.span
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
                </motion.span>
                <motion.span
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
                </motion.span>
              </h2>
              <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-4 z-10 md:mt-0 mt-4">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: isMobile ? 0 : -200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="md:w-1/2 w-full"
                >
                  <Image
                    layout="responsive"
                    src={brianaImg}
                    quality={90}
                    sizes={`(max-width: ${breakpoints.md}px) 100vw, 50vw`}
                    placeholder="blur"
                    alt="Briana Kelly"
                  />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: isMobile ? 0 : 200 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: isMobile ? 0 : 0.7 },
                    },
                  }}
                  className="md:w-1/2"
                >
                  <p className="text-lg font-display font-extrabold mb-4">
                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    Lorem ipsum dolor sit
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipi- scing elit,
                    sed diam nonummy nibh euismod tinci- dunt ut laoreet Lorem
                    ipsum dolor sit amet, con- sectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet
                  </p>
                </motion.div>
              </div>
              <motion.svg
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: isMobile ? 0 : 0.6 },
                  },
                }}
                viewBox="0 0 445 204"
                className="fill-secondary-dark absolute md:bottom-0 md:top-auto top-16 md:rotate-0 -rotate-90 translate-y-1/2 md:-left-32 -right-24 md:w-64 w-48"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 154L445 154C445 -51.3336 -1.07576e-05 -51.3336 0 154ZM-2.61955e-06 154L0 204L445 204V154L-2.61955e-06 154Z"
                />
              </motion.svg>
            </motion.div>
          </LayoutGroup>
        </div>
      </div>

      <TestimonialBlock
        testimonial={{
          image: testimonialImg,
          content: `"Briana is a patient, knowledgeable and motivating trainer. I am a 73-year-old with osteoporosis & scoliosis. When I started with Briana I couldn’t even get in and out of the bathtub, and I didn’t have the strength to pull on my tenser nylons. Now I can easily do these things and so much more! I recommend Briana highly. I just keep getting stronger and stronger with no injuries when I am training under her direction."`,
          author: "Leslee T.",
        }}
      />
    </>
  );
}
