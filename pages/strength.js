import Image from "next/image";
import PageBanner from "../components/PageBanner";
import { Circle } from "../components/shapes";
import TestimonialBlock from "../components/TestimonialBlock";
import testimonialImg from "../public/temp/testimonial-sample.png"; // FIXME: get each image from db
import bannerImg from "../public/images/strength.jpg";

export default function Strength() {
  // FIXME: source from database?
  const title = "Strength";
  const tagline = "High quality strength training. Inclusive to all.";
  const text = `Training is not about finding the best “workout”. Training is a deliberate practice with concrete goals and outcomes. We will give you the tools to train for your goals in a smart, fun, and sustainable way. We will support you as we fuel your passion for good movement through education and guided strength training, and help you navigate the path to your health and training goals.`;
  const image = { image: bannerImg, alt: "// FIXME: real alt text" };
  return (
    <>
      <div className="bg-primary-dark flex flex-col relative">
        <PageBanner image={image} title={title} tagline={tagline} text={text} />
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
            <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:self-auto self-center">
              <Image
                width={250}
                height={375}
                // layout="responsive"
                src={bannerImg}
                alt="// FIXME: use real alt text"
              />
            </div>
          </div>

          <div className="relative flex md:flex-row-reverse flex-col justify-between md:gap-0 gap-8 xl:mr-16 md:mb-60 mb-24">
            <div className="lg:max-w-lg md:max-w-xs">
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
            <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:self-auto self-center">
              <Image
                width={325}
                height={500}
                // layout="responsive"
                src={bannerImg}
                alt="// FIXME: use real alt text"
              />
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
                in the gym with your Kinesiologist.
              </p>
            </div>
            <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:self-auto self-center">
              <Image
                width={250}
                height={375}
                // layout="responsive"
                src={bannerImg}
                alt="// FIXME: use real alt text"
              />
            </div>
          </div>

          <div className="relative flex md:flex-row-reverse flex-col justify-between md:gap-0 gap-8 xl:mr-16 md:mb-60 mb-24">
            <div className="lg:max-w-lg md:max-w-xs">
              <h2 className="md:text-5xl text-4xl md:mb-8 mb-4">
                Online Training
              </h2>
              <p>
                Flexible options available including telehealth and remote
                coaching. Contact us for more information. Great as an add on
                for your in person training.
              </p>
            </div>
            <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:self-auto self-center">
              <Image
                width={325}
                height={450}
                // layout="responsive"
                src={bannerImg}
                alt="// FIXME: use real alt text"
              />
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

      {/* FIXME: get from db */}
      <TestimonialBlock
        testimonial={{
          content: `"Briana is a patient, knowledgeable and motivating trainer. I am a 73-year-old with osteoporosis & scoliosis. When I started with Briana I couldn’t even get in and out of the bathtub, and I didn’t have the strength to pull on my tenser nylons. Now I can easily do these things and so much more! I recommend Briana highly. I just keep getting stronger and stronger with no injuries when I am training under her direction."`,
          author: "LT",
          image: testimonialImg,
        }}
        word="strength"
      />
    </>
  );
}
