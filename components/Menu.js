import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import links from "../lib/menuItems";

const container = {
  closed: {
    y: "-100vh",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  open: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeIn",
      delayChildren: 0.35,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

export default function Menu({ isOpen = false, closeMenu }) {
  const router = useRouter();

  // FIXME: make sure this is proper technique for closing menu

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
          className="bg-primary-dark h-screen w-screen z-[100] fixed inset-0 flex flex-col pt-32 items-center"
          variants={container}
          initial="closed"
          animate="open"
          exit="closed"
        >
          {links.map((link) => (
            <motion.div key={link.id} variants={itemVariants} className="py-3">
              <Link href={link.href} key={link.id} passHref>
                <a
                  className={`text-6xl font-display font-semibold text-primary-light hover:text-secondary-light whitespace-nowrap ${
                    router.asPath === link.href && "text-secondary-light"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
