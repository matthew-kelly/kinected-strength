import Image from "next/image";
import TestimonialBlock from "@/components/TestimonialBlock";
import MetaTags from "@/components/MetaTags";
import ButtonLink from "@/components/ButtonLink";
import LogoSpinner from "@/components/LogoSpinner";
import ScrollingText from "@/components/ScrollingText";
import DivInView from "@/components/DivInView";
import { client } from "@/lib/sanityClient";
import { testimonialsQuery } from "@/lib/queries";
import { breakpoints } from "@/utils/theme";
import bannerImg from "@/public/images/train-in-person.jpg";
import summit1Img from "@/public/images/summit-1.png";
import summit2Img from "@/public/images/summit-2.png";
// import summit3Img from "@/public/images/summit-3.png";
// import summit4Img from "@/public/images/summit-4.png";
import summit5Img from "@/public/images/summit-5.png";
import summit6Img from "@/public/images/summit-6.png";
import Link from "next/link";

export default function Summit({ page }) {
  const imgSizes = `(max-width: ${breakpoints.sm}px) 100vw, 50vw`;

  const sd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "SUMMIT",
    description: `${page.bannerHeadline} ${page.bannerText} With SUMMIT you'll get stronger, improve performance, and build resiliency so that your body is prepared to tackle anything life throws at you!`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: 2,
    },
    offers: {
      "@type": "Offer",
      price: 59,
      priceCurrency: "CAD",
    },
  };
  // XXX: SUMMIT structured data is hardcoded (description, price)

  const reviews = page?.testimonials?.map((testimonial) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: testimonial.author,
    },
    reviewBody: testimonial.content,
  }));

  if (reviews) {
    sd.reviews = reviews;
  }

  return (
    <>
      <MetaTags
        title={page.title}
        description={`${page.bannerHeadline} ${page.bannerText}`}
        slug="train-online/summit"
        image={{ src: bannerImg.src, isExternal: false }}
        structuredData={sd}
      />
      <div className="bg-light-gray">
        <section className="flex flex-col bg-light-gray text-primary-dark">
          <div className="flex flex-col max-w-6xl w-full self-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center py-16 bg-light-gray lg:px-32 md:px-16 px-8">
              <div className="flex flex-col gap-4">
                <h1 className="md:text-5xl text-4xl">{page.bannerHeadline}</h1>
                <p>{page.bannerText}</p>
                <p>
                  With SUMMIT you&apos;ll get stronger, improve performance, and
                  build resiliency so that your body is prepared to tackle
                  anything life throws at you!
                </p>
                <p>Join our community for only $59/month.</p>
                <ul className="grid grid-cols-2 grid-flow-row gap-2 border-t-[1px] border-primary-dark pt-6 mt-2">
                  <CheckBlock>
                    3-days per week of functional strength
                  </CheckBlock>
                  <CheckBlock>Kinesiologist-led instruction</CheckBlock>
                  <CheckBlock>
                    Exercise variations to suit your level
                  </CheckBlock>
                  <CheckBlock>Educational video tutorials</CheckBlock>
                  <CheckBlock>Accountability and consistency</CheckBlock>
                  <CheckBlock>
                    Includes: mobility, strength, power and core
                  </CheckBlock>
                </ul>
              </div>
              <DivInView className="relative mr-6 mt-6 max-md:order-last self-start">
                <Image
                  src={summit1Img}
                  alt="Summit"
                  priority
                  placeholder="blur"
                  sizes={imgSizes}
                />
                <DivInView
                  hidden={{
                    opacity: 0,
                  }}
                  visible={{
                    opacity: 1,
                  }}
                  delay={0.5}
                  className="absolute -top-[75px] -right-[75px]"
                >
                  <LogoSpinner size="150" />
                </DivInView>
              </DivInView>
              <ButtonLink
                href="https://kinectedstrength.thrivecart.com/summit/"
                target="_blank"
                className="self-center sm:col-span-2 mx-auto text-center mt-4 md:mt-8"
                variant="md:xlarge large"
              >
                Join SUMMIT
              </ButtonLink>
            </div>
          </div>
        </section>

        {page?.testimonials && (
          <TestimonialBlock
            testimonials={page.testimonials}
            question={page.question}
            highlight={page.highlight}
            showTitle={false}
          />
        )}

        <section className="flex flex-col bg-primary-dark text-primary-light py-4">
          <DivInView
            hidden={{ opacity: 0, x: "-20%" }}
            visible={{
              opacity: 1,
              x: 0,
            }}
            duration={1}
            className="flex flex-col items-center w-full self-center"
          >
            <ScrollingText
              baseVelocity={1}
              textClass="uppercase text-2xl sm:text-3xl pr-8 font-extrabold text-secondary-light"
            >
              <span aria-hidden="true">SUMMIT</span>
            </ScrollingText>
          </DivInView>
        </section>

        <section className="flex flex-col bg-primary-light text-primary-dark">
          <div className="flex flex-col max-w-4xl w-full self-center">
            <div className="flex flex-col gap-8 justify-center items-center py-16 lg:px-32 md:px-16 px-8 *:text-primary-dark ">
              <h2 className="text-3xl sm:text-4xl flex flex-col gap-2">
                <span className="italic text-2xl sm:text-3xl">
                  There&apos;s tons of online programs out there.
                </span>
                <span>What makes SUMMIT different?</span>
              </h2>
              <DivInView>
                <TextBlock>
                  <p>
                    Most simply, we designed SUMMIT so that we could share the
                    passion and expertise that we bring to in-person kinesiology
                    training with a larger community. Having a plan is key to
                    getting results, and you can trust that SUMMIT is designed
                    using evidence-based, progressive strength programming.
                    Leave the planning to the experts and take the thought out
                    of training!
                  </p>
                  <p>
                    As we know from years of kinesiology practice, consistency
                    is necessary to achieve strength goals. In order to remain
                    consistent, however, there must be some flexibility in
                    training! SUMMIT is flexible as it explores different
                    exercise variations to suit all levels and equipment, and
                    prioritizes education and guided exercise technique through
                    instructive videos. At the end of each cycle, it encourages
                    you to push past your comfort zone with safe and progressive
                    end-of-program testing. When the training is smart, your
                    body feels good, and the results follow!
                  </p>
                </TextBlock>
              </DivInView>
              <DivInView amount={0.3} className="flex max-w-full mx-auto">
                {/* TODO: use these options for final video
                  https://www.youtube-nocookie.com/embed/
                  {video id}
                  ?rel=0&iv_load_policy=3&fs=0&color=white&disablekb=1
                */}
                <iframe
                  src="https://www.youtube-nocookie.com/embed/7Z_kN1aGN08?rel=0&iv_load_policy=3&fs=0&color=white&disablekb=1"
                  width="560"
                  height="315"
                  title="Everything You Need to Know About RISE!"
                ></iframe>
              </DivInView>
              <DivInView>
                <ButtonLink
                  href="https://kinectedstrength.thrivecart.com/summit/"
                  target="_blank"
                  className="self-center mx-auto text-center mt-4"
                  variant="md:xlarge large"
                >
                  Join SUMMIT
                </ButtonLink>
              </DivInView>
            </div>
          </div>
        </section>

        <section className="flex flex-col bg-light-gray text-primary-dark">
          <div className="flex flex-col max-w-6xl w-full self-center">
            <div className="flex flex-col gap-4 justify-center items-center py-16 lg:px-32 md:px-16 px-8 *:text-primary-dark">
              <div className="flex flex-col gap-2 sm:gap-8">
                <h2 className="text-3xl sm:text-4xl">
                  SUMMIT is best suited for individuals who want to build
                  strength and athletic performance.
                </h2>
                <p className="text-xl sm:text-2xl font-display font-bold w-full">
                  It&apos;s right for you if:
                </p>
              </div>
              <DivInView className="max-w-3xl w-full px-4 sm:px-8">
                <TextBlock>
                  <ul className="list-disc pl-4">
                    <li>
                      Your progress has plateaued or you&apos;re lacking
                      consistency
                    </li>
                    <li>You want to move better and get stronger</li>
                    <li>You&apos;re injury-free and want to stay that way!</li>
                    <li>
                      You have access to weights (ie. barbell, dumbbells or
                      kettlebells) and resistance bands
                    </li>
                  </ul>
                </TextBlock>
              </DivInView>
              <DivInView className="w-full">
                <p className="text-xl sm:text-2xl font-display font-bold w-full">
                  It&apos;s also for you if:
                </p>
              </DivInView>
              <DivInView className="max-w-3xl w-full px-4 sm:px-8">
                <TextBlock>
                  <ul className="list-disc pl-4">
                    <li>You want to improve your bone density</li>
                    <li>You want to lift more weight, safely</li>
                    <li>You have some experience with resistance training</li>
                  </ul>
                </TextBlock>
              </DivInView>
              <DivInView className="mt-8 md:mt-4">
                <TextBlock>
                  <p className="italic text-lg max-sm:text-center">
                    If <span className="font-bold">SUMMIT</span> doesn&apos;t
                    sound like the right fit,{" "}
                    <Link
                      href="/train-online/specialty-programs"
                      className="underline underline-offset-2 text-black hover:no-underline hover:text-primary-dark"
                    >
                      check out some of our other program options.
                    </Link>
                  </p>
                </TextBlock>
              </DivInView>
              <DivInView className="mt-8">
                <ButtonLink
                  href="https://kinectedstrength.thrivecart.com/summit/"
                  target="_blank"
                  className="self-center mx-auto text-center"
                  variant="md:xlarge large"
                >
                  Join SUMMIT
                </ButtonLink>
              </DivInView>
            </div>
          </div>
        </section>

        <section className="flex flex-col bg-primary-light text-primary-dark py-4">
          <DivInView
            hidden={{ opacity: 0, x: "20%" }}
            visible={{
              opacity: 1,
              x: 0,
            }}
            duration={1}
            className="flex flex-col items-center w-full self-center"
          >
            <ScrollingText
              baseVelocity={-0.5}
              textClass="text-2xl sm:text-3xl font-bold"
            >
              <div className="flex gap-3">
                <span aria-hidden="true">Follow a plan.</span>
                <span aria-hidden="true">Build independence.</span>
                <span aria-hidden="true">Get strong.</span>
              </div>
            </ScrollingText>
          </DivInView>
        </section>

        <section className="flex flex-col bg-light-gray text-primary-dark">
          <div className="flex flex-col gap-8 max-w-6xl w-full self-center py-16">
            <div className="grid md:grid-cols-[1fr_1fr] gap-4 md:gap-8 justify-center items-center lg:px-32 md:px-16 px-8">
              <DivInView>
                <TextBlock title="The Program">
                  <p>
                    Every cycle of SUMMIT includes 3 specific training phases,
                    each 2 weeks in length. While the exercises remain
                    consistent through the 6-week cycle, you&apos;ll see the
                    focus shift in each phase.
                  </p>
                  <div className="flex flex-col">
                    <p>The phases:</p>
                    <ol className="list-decimal pl-4 [&_li]:mb-1">
                      <li>
                        <span className="font-bold">
                          Basecamp - <span className="italic">Education</span>
                        </span>
                        <ul className="list-disc pl-8">
                          <li>
                            Learn the cycle&apos;s new exercises and build
                            movement competency by the end of the second week.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">
                          The Grind -{" "}
                          <span className="italic">Build Strength</span>
                        </span>
                        <ul className="list-disc pl-8">
                          <li>
                            Train with more volume and lift heavier weights.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">
                          The Peak -{" "}
                          <span className="italic">
                            Find Your Max Potential
                          </span>
                        </span>
                        <ul className="list-disc pl-8">
                          <li>
                            Check your progress over the cycle with optional
                            strength or endurance testing.
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </TextBlock>
              </DivInView>
              <DivInView amount={0.3} delay={0.1}>
                <Image
                  src={summit2Img}
                  alt="screenshot example of a SUMMIT workout with Andrea Brennan in the background working out with kettlebells"
                  sizes={imgSizes}
                  placeholder="blur"
                />
              </DivInView>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr] gap-4 md:gap-8 justify-center items-center lg:px-32 md:px-16 px-8">
              <DivInView className="md:order-last">
                <TextBlock title="The App">
                  <ul className="list-disc pl-4 [&_li]:mb-1">
                    <li>
                      Video tutorials for each exercise with the same level of
                      coaching you&apos;d expect in person
                    </li>
                    <li>Easy to follow display</li>
                    <li>Ability to record your weights and progress</li>
                    <li>
                      Messaging feature to contact your coach directly with
                      questions or feedback
                    </li>
                    <li>Guidance for weight, effort, reps and rest</li>
                  </ul>
                </TextBlock>
              </DivInView>
              <DivInView amount={0.3} delay={0.1}>
                <Image
                  src={summit5Img}
                  alt="two examples of a SUMMIT workout"
                  sizes={imgSizes}
                  placeholder="blur"
                />
              </DivInView>
            </div>

            <div className="grid md:grid-cols-[1fr_1fr] gap-4 md:gap-8 justify-center items-center lg:px-32 md:px-16 px-8">
              <DivInView>
                <TextBlock title="The Exercises">
                  <p>
                    SUMMIT is flexible; it&apos;s designed to meet you where
                    you&apos;re at each day. Within each session, you&apos;ll
                    find:
                  </p>
                  <ul className="list-disc pl-4 [&_li]:mb-1">
                    <li>
                      A well-rounded exercise selection for mobility, strength,
                      power, balance and core
                    </li>
                    <li>
                      Variations within each movement to suit your skill level
                    </li>
                    <li>
                      Suggestions for how to modify based on equipment available
                    </li>
                    <li>Graded progressions to support your growth</li>
                  </ul>
                </TextBlock>
              </DivInView>
              <DivInView amount={0.3} delay={0.1}>
                {/* TODO: replace image and alt text */}
                <Image
                  src={summit6Img}
                  alt="example of a SUMMIT workout"
                  sizes={imgSizes}
                  placeholder="blur"
                />
              </DivInView>
            </div>
            <DivInView>
              <ButtonLink
                href="https://kinectedstrength.thrivecart.com/summit/"
                target="_blank"
                className="self-center sm:col-span-2 mx-auto text-center"
                variant="md:xlarge large"
              >
                Join SUMMIT
              </ButtonLink>
            </DivInView>
          </div>
        </section>
      </div>
    </>
  );
}

function CheckBlock({ children }) {
  return (
    <li className="grid grid-cols-[2rem_1fr] gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-green-600 w-8 h-8"
        viewBox="0 0 24 24"
      >
        <title>checkmark</title>
        <path d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"></path>
      </svg>
      <p>{children}</p>
    </li>
  );
}

function TextBlock({ title = "", subtitle = "", children }) {
  return (
    <div className="flex flex-col gap-4">
      {title && <h2 className="text-2xl mb-2">{title}</h2>}
      {/* {title && <h2 className="uppercase text-sm">{title}</h2>} */}
      {/* {subtitle && <h3 className="text-2xl mb-2">{subtitle}</h3>} */}
      {children}
    </div>
  );
}

export async function getStaticProps() {
  const page = await client.fetch(testimonialsQuery, {
    slug: "summit",
  });

  return {
    props: {
      page,
    },
  };
}
