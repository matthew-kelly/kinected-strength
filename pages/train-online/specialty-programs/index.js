import PageBanner from "@/components/PageBanner";
import TestimonialBlock from "@/components/TestimonialBlock";
import MetaTags from "@/components/MetaTags";
import ProgramCard from "@/components/ProgramCard";
import { client } from "@/lib/sanityClient";
import { allSpecialtyProgramsQuery, testimonialsQuery } from "@/lib/queries";
import bannerImg from "@/public/images/blog-banner.jpg";
import bannerImgMobile from "@/public/images/blog-banner-mobile.jpg";

// TODO: update banner image and alt text

export default function SpecialtyPrograms({ page, programs }) {
  return (
    <>
      <MetaTags
        title={page.title}
        description={`${page.bannerHeadline} ${page.bannerText}`}
        slug="train-online/specialty-programs"
        image={{ src: bannerImg.src, isExternal: false }}
      />

      <section className="bg-primary-dark flex flex-col relative">
        <PageBanner
          image={bannerImg}
          mobileImage={bannerImgMobile}
          alt="Briana, Jess, and Andrea doing exercises with kettlebells"
          title={page.title}
          headline={page.bannerHeadline}
          text={page.bannerText}
        />
      </section>
      <section className="flex flex-col bg-light-gray md:px-24 px-8 md:py-20 py-8 md:pb-32 text-primary-dark">
        <div className="flex flex-col max-w-6xl w-full self-center">
          <h2 className="uppercase text-xl mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            {programs &&
              programs.map((program) => (
                <ProgramCard key={program._id} program={program} />
              ))}
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
    </>
  );
}

export async function getStaticProps() {
  const programs = await client.fetch(allSpecialtyProgramsQuery);
  const page = await client.fetch(testimonialsQuery, {
    slug: "specialty-programs",
  });

  return {
    props: {
      programs,
      page,
    },
  };
}
