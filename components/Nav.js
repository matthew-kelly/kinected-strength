import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "./Menu";
import Logo from "./Logo";
import { MenuButton } from "./MenuButton";
import { KLogo } from "./shapes";
import { useMenu } from "../lib/menuState";
import { useWindowSize } from "../lib/useWindowSize";
import { useScrollDirection } from "../lib/useScrollDirection";
import { breakpoints, colors } from "../utils/theme";

export default function Nav() {
  const { toggleMenu, closeMenu, isOpen } = useMenu();
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(false);

  const windowSize = useWindowSize();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    setIsHomePage(router.pathname === "/");
  }, [router.pathname]);

  return <>
    <nav
      id="nav-main"
      className={`flex justify-between items-center bg-primary-dark md:px-16 px-4 z-[101] md:h-32 h-20 transition-[top] ease-in-out duration-300 ${
        ((isHomePage && windowSize.width < breakpoints.lg) || !isHomePage) &&
        scrollDirection === "down"
          ? "md:-top-32 -top-20"
          : "top-0"
      } ${
        isHomePage && windowSize.width >= breakpoints.lg
          ? "fixed w-full"
          : "sticky"
      }`}
    >
      {/* bg-opacity-80 */}
      {isHomePage ? (
        <KLogo
          width="30"
          colorRect="fill-primary-light"
          colorTop="fill-secondary-dark"
          colorBottom="fill-secondary-light"
          className="md:h-8 h-6"
        />
      ) : (
        (<Link href="/">

          <KLogo
            width="30"
            colorRect="fill-primary-light"
            colorTop="fill-secondary-dark"
            colorBottom="fill-secondary-light"
            className="md:h-8 h-6"
          />

        </Link>)
      )}
      {(!isHomePage || (isHomePage && windowSize.width < breakpoints.lg)) && (
        (<Link href="/">

          <Logo />

        </Link>)
      )}
      <button
        className="flex items-center p-0"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        role="menu button"
        id="menu-button"
      >
        <MenuButton
          isOpen={isOpen}
          strokeWidth={windowSize.width > breakpoints.sm ? "4" : "2"}
          color={colors["primary-light"]}
          lineProps={{ strokeLinecap: "round" }}
          width={windowSize.width > breakpoints.sm ? "28" : "14"}
          height={windowSize.width > breakpoints.sm ? "24" : "12"}
          style={{ cursor: "pointer", zIndex: 103 }}
        />
      </button>
    </nav>
    <Menu isOpen={isOpen} closeMenu={closeMenu} />
  </>;
}
