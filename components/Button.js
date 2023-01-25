import { motion } from "framer-motion";

export default function Button({
  className = "primary",
  type = "button",
  children,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`button ${className}`}
      type={type}
    >
      {children}
    </motion.button>
  );
}
