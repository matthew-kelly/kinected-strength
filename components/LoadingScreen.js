import { motion, AnimatePresence } from "framer-motion";
import LogoSpinner from "./LogoSpinner";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 h-screen w-screen bg-primary-dark flex flex-col items-center justify-center z-[200]"
          key="loadingScreen"
          transition={{
            duration: 0.1,
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.2,
            },
          }}
        >
          <LogoSpinner size="300" textClass="fill-primary-light" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
