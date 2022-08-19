import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import links from "../lib/menuItems";

// Not in use
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.25,
    },
  },
};

export default function Menu({ isOpen = false, closeMenu }) {
  const router = useRouter();

  // FIXME: make sure this is proper technique for closing menu
  // FIXME: close menu when clicking outside of menu

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (isOpen) closeMenu();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [isOpen, closeMenu, router]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg-secondary-dark h-screen z-[100] fixed top-0 left-0"
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          exit={{ width: 0, transition: { delay: 0.25, duration: 0.2 } }}
        >
          <motion.div
            className="flex flex-col mt-8"
            initial="closed"
            animate="open"
            exit="closed"
            // variants={sideVariants}
          >
            {links.map((link) => (
              <Link href={link.href} key={link.id} passHref>
                <motion.a
                  className={`px-16 py-4 text-2xl hover:bg-white text-white hover:text-black whitespace-nowrap ${
                    router.asPath === link.href &&
                    "bg-secondary-light text-black"
                  }`}
                  variants={itemVariants}
                  onClick={closeMenu}
                >
                  {link.name}
                </motion.a>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
