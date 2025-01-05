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
import summit5Img from "@/public/images/summit-5.png";
import summit6Img from "@/public/images/summit-6.png";

// TODO: finish page

/*
	- "Summit"
		- clean look
		- https://shop.achievefitnessonline.com/products/rise-program
			- first 3 bits
			- + testimonials (swipe box, same as testimonials now)
		- like a blog, not like homepage
			- not blue background, full width colours for sections
		- layout
			- nav bar (normal)
			- title and subheading w/ photo side by side
			- CTA button - use existing format button
			- testimonals section
			- video with title
			- CTA section w/ button and text
			- photo and text phone section (x3 probably)
				- search "THE APP A simple, user-friendly experience" 
			- CTA button
			- Blue footer
*/

export default function Summit({ page }) {
  const imgSizes = `(max-width: ${breakpoints.sm}px) 100vw, 50vw`;

  return (
    <>
      <MetaTags
        title={page.title}
        description={`${page.bannerHeadline} ${page.bannerText}`}
        slug="train-online/summit"
        image={{ src: bannerImg.src, isExternal: false }}
      />
      <div className="bg-light-gray">
        <section className="flex flex-col bg-light-gray text-primary-dark">
          <div className="flex flex-col max-w-6xl w-full self-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center py-16 bg-light-gray lg:px-32 md:px-16 px-8">
              <div className="flex flex-col gap-4">
                <h1 className="md:text-5xl text-4xl">{page.bannerHeadline}</h1>
                <p className="text-primary-dark">{page.bannerText}</p>
              </div>
              <DivInView className="relative mr-6 mt-6 max-sm:order-last">
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
                className="self-center sm:col-span-2 mx-auto text-center"
                variant="large"
              >
                Lorem Ipsum
              </ButtonLink>
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
            <ScrollingText baseVelocity={4}>SUMMIT</ScrollingText>
          </DivInView>
        </section>

        <section className="flex flex-col bg-primary-light text-primary-dark">
          <div className="flex flex-col max-w-4xl w-full self-center">
            <div className="flex flex-col gap-8 justify-center items-center py-16 lg:px-32 md:px-16 px-8 *:text-primary-dark ">
              <h2 className="text-4xl sm:text-5xl">Lorem ipsum dolor</h2>
              <DivInView>
                <TextBlock>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut
                  </p>
                </TextBlock>
              </DivInView>
              <DivInView amount={0.3} className="flex max-w-full mx-auto">
                {/* TODO: use these options
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
            </div>
          </div>
        </section>

        <section className="flex flex-col bg-light-gray text-primary-dark">
          <div className="flex flex-col max-w-4xl w-full self-center">
            <div className="flex flex-col gap-8 justify-center items-center py-16 lg:px-32 md:px-16 px-8 *:text-primary-dark [&_p]:text-base">
              <h2 className="text-4xl sm:text-5xl">Lorem ipsum dolor</h2>
              <DivInView>
                <TextBlock>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut
                  </p>
                </TextBlock>
              </DivInView>
              <DivInView>
                <ButtonLink
                  href="https://kinectedstrength.thrivecart.com/summit/"
                  target="_blank"
                  className="self-center sm:col-span-2 mx-auto text-center"
                  variant="large"
                >
                  Lorem Ipsum Dolor Sit Amet
                </ButtonLink>
              </DivInView>
            </div>
          </div>
        </section>

        <section className="flex flex-col bg-light-gray text-primary-dark py-4">
          <DivInView
            hidden={{ opacity: 0, x: "20%" }}
            visible={{
              opacity: 1,
              x: 0,
            }}
            duration={1}
            className="flex flex-col items-center w-full self-center"
          >
            <ScrollingText baseVelocity={-2}>
              Lorem ipsum dolor sit amet.
            </ScrollingText>
          </DivInView>
        </section>

        <section className="flex flex-col bg-light-gray text-primary-dark">
          <div className="flex flex-col gap-16 max-w-6xl w-full self-center py-16">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center lg:px-32 md:px-16 px-8">
              <DivInView>
                <TextBlock
                  title="Lorem Ipsum"
                  subtitle="Lorem ipsum dolor sit amet"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut
                  </p>
                </TextBlock>
              </DivInView>
              <DivInView amount={0.3} delay={0.1}>
                <Image
                  src={summit6Img}
                  alt="Screenshot of a SUMMIT workout"
                  sizes={imgSizes}
                  placeholder="blur"
                />
              </DivInView>
            </div>
            <div className="flex flex-col sm:flex-row-reverse gap-4 md:gap-8 justify-center items-center lg:px-32 md:px-16 px-8">
              <DivInView>
                <TextBlock
                  title="Lorem Ipsum"
                  subtitle="Lorem ipsum dolor sit amet"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut
                  </p>
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
            <DivInView>
              <ButtonLink
                href="https://kinectedstrength.thrivecart.com/summit/"
                target="_blank"
                className="self-center sm:col-span-2 mx-auto text-center"
                variant="large"
              >
                Lorem Ipsum Dolor Sit Amet
              </ButtonLink>
            </DivInView>
          </div>
        </section>
      </div>
    </>
  );
}

function TextBlock({ title = "", subtitle = "", children }) {
  return (
    <div className="flex flex-col gap-4">
      {title && <h2 className="uppercase text-sm">{title}</h2>}
      {subtitle && <h3 className="text-2xl mb-2">{subtitle}</h3>}
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
