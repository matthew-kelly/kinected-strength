import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";

export default function EventCard({ post }) {
  const containerVariants = {
    hover: {
      // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      // borderRadius: "8px",
      // overflow: "hidden",
    },
  };
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
  const textContainerVariants = {
    // initial: {

    // },
    hover: {
      // padding: "0px 8px",
      // marginTop: "2px",
      // marginBottom: "8px",
      // color: colors["secondary-dark"],
      // x: [0, 4, 4],
      // borderLeftWidth: [0, 0, 4],
      // paddingLeft: [0, 4, 4],
      // transition: {
      //   duration: 0.1,
      //   // delay: 0.25,
      // },
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
    <motion.div
      className="flex flex-col gap-4"
      whileHover="hover"
      initial="initial"
      variants={containerVariants}
    >
      <Link href={`/community/${post.slug}`}>

        <motion.div
          variants={imageVariants}
          className="relative border-primary-dark"
        >
          <Image
            layout="responsive"
            src={post.image.url}
            alt="// FIXME: real alt text"
          />
        </motion.div>
        <motion.div
          className="mt-4 flex flex-col relative border-l-primary-dark"
          variants={textContainerVariants}
        >
          <span className="font-display font-bold text-3xl">
            {post.title}
          </span>
          <div className="flex justify-between mt-2">
            <span>{post.date}</span>
          </div>
          <motion.div
            className="bg-primary-dark self-center absolute -bottom-2"
            variants={lineVariants}
          />
        </motion.div>

      </Link>
    </motion.div>
  );
}
