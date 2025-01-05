import { m } from "framer-motion";

export default function DivInView({
  children,
  hidden = { opacity: 0, y: "10%" },
  visible = { opacity: 1, y: 0 },
  transition = undefined,
  delay = 0,
  duration = 0.3,
  ease = "easeOut",
  initial = "hidden",
  once = true,
  amount = "some", // all, some, number between 0-1
  className = "",
}) {
  const variants = { hidden, visible };

  let t = transition === undefined ? { duration, delay, ease } : transition;

  return (
    <m.div
      initial={initial}
      variants={variants}
      transition={t}
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </m.div>
  );
}
