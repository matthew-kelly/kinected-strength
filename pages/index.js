import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import LogoSpinner from "../components/LogoSpinner";
import { ScrollTriggerProvider } from "../components/ScrollTriggerProvider";
import HomeBanner from "../components/HomeBanner";
import Image from "next/image";
import tguPic from "../public/temp/tgu.png";
import grassPic from "../public/temp/grass.png";
import Link from "next/link";
import TestimonialBlock from "../components/TestimonialBlock";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kinected Strength</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen" id="bannerContainer">
        <ScrollTriggerProvider options={{ end: "+=50%" }}>
          <HomeBanner />
        </ScrollTriggerProvider>
      </div>

      <div className="bg-primary-dark flex flex-col relative z-10">
        {/* FIXME: have banner be floating at bottom of screen until you scroll past (on smaller devices) */}
        <div className="px-16 py-12 flex justify-center">
          <h1 className="font-semibold text-3xl text-center text-secondary-light">
            Your home for kinesiology, strength training, and active rehab in
            North Vancouver<span className="text-secondary-dark">.</span>
          </h1>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <Image
              src={tguPic}
              layout="responsive"
              alt="// FIXME: add real alt text"
            />
          </div>
          {/* FIXME: make shapes properly fill space at large screen sizes */}
          <div className="w-1/2 bg-primary-light flex flex-col justify-center gap-10 p-8">
            <div className="flex justify-center gap-8">
              <Link href="/strength" passHref>
                <motion.a
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
                        className="font-bold font-display tracking-wider fill-primary-light uppercase"
                      >
                        It&apos;s Strength
                      </text>
                    </g>
                  </svg>
                </motion.a>
              </Link>
              <div className="flex flex-col gap-8">
                <Link href="/education" passHref>
                  <motion.a
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
                        y="85%"
                        fontSize="40"
                        textAnchor="middle"
                        className="font-bold font-display tracking-wider fill-primary-dark uppercase"
                      >
                        It&apos;s Education
                      </text>
                    </svg>
                  </motion.a>
                </Link>
                <Link href="/community" passHref>
                  <motion.a
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
                        className="font-bold font-display tracking-wider fill-secondary-light uppercase"
                      >
                        It&apos;s Community
                      </text>
                    </svg>
                  </motion.a>
                </Link>
              </div>
            </div>

            <span className="text-primary-dark font-display font-semibold text-5xl col-span-2 text-center">
              It&apos;s more than fitness.
            </span>
          </div>
        </div>

        {/* FIXME: get headings font */}
        {/* FIXME: background colour */}
        <div className="flex flex-col bg-light-gray px-24 py-20 text-primary-dark">
          <div className="flex flex-col mb-32">
            <h2 className="text-6xl mb-12 max-w-lg">
              Join a community of evidence-based strength training.
            </h2>
            <div className="flex gap-16">
              <div className="w-2/3">
                <Image
                  src={grassPic}
                  layout="responsive"
                  alt="// FIXME: add real alt text"
                />
              </div>
              <div className="w-1/3 ml-16">
                <h3 className="uppercase mb-4">Who we are</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipi- scing elit,
                  sed diam nonummy nibh euismod tin- cidunt ut laoreet Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor
                  sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col px-36">
            <div className="flex gap-16">
              <div className="w-1/2 mr-16">
                <h3 className="uppercase mb-4">What we do</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  at pretium orci, eu sodales lacus. Aenean at tortor vel tellus
                  convallis fermentum. Duis vitae mauris condimentum diam
                  iaculis scelerisque. Sed faucibus odio a nunc egestas
                  ultricies. Donec quis risus vitae enim pulvinar sagittis id
                  sed justo. Donec pretium, ante quis mattis sollicitudin,
                  libero leo rhoncus nisl, ut laoreet tellus sem sit amet lorem.
                </p>
              </div>
              <div className="w-1/2 relative">
                <Image
                  src={tguPic}
                  layout="responsive"
                  alt="// FIXME: add real alt text"
                />
                <div className="absolute -top-[100px] -right-[100px]">
                  <LogoSpinner size="200" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
}
