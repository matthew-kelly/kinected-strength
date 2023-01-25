import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function DivInView({
  children,
  hidden = { opacity: 0, y: 100 },
  visible = { opacity: 1, y: 0, transition: { duration: 0.5 } },
  initial = "hidden",
  once = true,
  amount = "some", // all, some, number between 0-1
  className = "",
}) {
  const variants = { hidden, visible };

  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount,
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={initial}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
