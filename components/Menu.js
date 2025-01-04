import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import links from "@/lib/menuItems";

const container = {
  closed: {
    y: "-100%",
    transition: {
      type: "tween",
      duration: 0.7,
    },
  },
  open: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeIn",
      delayChildren: 0.35,
      staggerChildren: 0.08,
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

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (isOpen) closeMenu();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [isOpen, closeMenu, router]);

  // FIXME: keep tab focus inside menu when menu is open

  return (
    <m.div
      className="bg-primary-dark h-screen w-screen z-[100] fixed inset-0 flex flex-col pt-20 md:pt-32 items-center overflow-y-auto"
      variants={container}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      role="me"
    >
      {links.map((link) => (
        <m.div
          key={link.id}
          variants={itemVariants}
          className="py-4 first:pt-8 last:pb-8"
        >
          {router.asPath === link.href ? (
            <span
              className="lg:text-6xl md:text-5xl text-4xl font-display font-bold hover:text-secondary-light whitespace-nowrap text-secondary-light cursor-pointer"
              onClick={closeMenu}
            >
              {link.name}
            </span>
          ) : (
            <Link
              href={link.href}
              key={link.id}
              passHref
              className="lg:text-6xl md:text-5xl text-4xl font-display font-bold hover:text-secondary-light whitespace-nowrap text-primary-light"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          )}
        </m.div>
      ))}
    </m.div>
  );
}
