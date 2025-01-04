import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/sanity";
import { dateFormatter } from "@/utils/dateFormatter";

export default function EventCard({ event }) {
  const date = dateFormatter(event.eventDate);
  let endDate;
  if (event.isOngoingEvent && event.endDate) {
    endDate = dateFormatter(event.endDate);
  }

  const imageVariants = {
    initial: {
      // borderRadius: "0px",
      // borderWidth: "0px",
    },
    hover: {
      // borderRadius: "8px",
      // borderWidth: "5px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      x: 2,
      y: -2,
      transition: {
        duration: 0.2,
        // delay: 0.1,
      },
    },
  };

  const lineVariants = {
    initial: {
      height: 1,
      width: 0,
    },
    hover: {
      // keyframes
      // animate spreading out from center to full width
      // then animate getting thicker
      // reverse when leaving hover
      height: [1, 1, 4],
      width: ["0%", "100%", "100%"],
      transition: {
        duration: 0.3,
        times: [0, 0.8, 1],
      },
    },
  };

  return (
    <m.article className="z-10" whileHover="hover" initial="initial">
      <Link href={`/community/${event.slug}`} className="flex flex-col">
        <m.div
          variants={imageVariants}
          className="relative border-primary-dark"
        >
          <Image
            placeholder="blur"
            blurDataURL={event.blur}
            src={urlForImage(event.mainImage).width(700).height(700).url()}
            width={700}
            height={700}
            alt={event.mainImage.alt}
            className="w-full h-auto"
          />
        </m.div>
        <div className="mt-2 md:mt-4 flex flex-col relative p-2 pt-0 md:p-0">
          <h3 className="font-display font-bold text-2xl md:text-3xl">
            {event.title}
          </h3>
          <div className="flex justify-between mt-2 text-sm md:text-base">
            <span>
              {event.isOngoingEvent
                ? `${endDate ? `${date} - ${endDate}` : "Ongoing"}`
                : date}
            </span>
          </div>
          <m.div
            className="bg-primary-dark self-center absolute -bottom-2"
            variants={lineVariants}
          />
        </div>
      </Link>
    </m.article>
  );
}
