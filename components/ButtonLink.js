import { m } from "framer-motion";
import Link from "next/link";

export default function ButtonLink({
  href,
  target = "_self",
  className = "",
  variant = "",
  children,
}) {
  return (
    <Link href={href} target={target} legacyBehavior={true}>
      <m.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`button flex max-w-fit ${className} ${variant}`}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : ""}
      >
        {children}
      </m.a>
    </Link>
  );
}
