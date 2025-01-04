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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`button flex max-w-fit ${className} ${variant}`}
        href={href}
        target={target}
      >
        {children}
      </m.a>
    </Link>
  );
}
