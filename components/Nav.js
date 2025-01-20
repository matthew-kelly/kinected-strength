import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "./Menu";
import Logo from "./Logo";
import { MenuButton } from "./MenuButton";
import { KLogo } from "./shapes";
import { useMenu } from "@/lib/menuState";
import { useWindowSize } from "@/lib/useWindowSize";
import { useScrollDirection } from "@/lib/useScrollDirection";
import { breakpoints, colors } from "@/utils/theme";

export default function Nav() {
  const { toggleMenu, closeMenu, isOpen } = useMenu();
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(false);

  const windowSize = useWindowSize();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    setIsHomePage(router.pathname === "/");
  }, [router.pathname]);

  return (
    <header>
      <nav
        id="nav-main"
        className={`z-[101] transition-[top] ease-in-out duration-300 ${
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
        <div
          className={`grow flex justify-between items-center bg-primary-dark px-4 md:px-16 md:h-32 h-20 z-[101] ${
            isHomePage && windowSize.width >= breakpoints.lg
              ? "fixed w-full"
              : "sticky"
          } ${
            isOpen && windowSize.width < breakpoints.md
              ? "shadow-[0_-2px_14px_0_rgba(0,0,0,0.18)]"
              : ""
          }`}
        >
          <Link href="/" aria-label="Link to home page">
            <KLogo
              width="30"
              colorRect="fill-primary-light"
              colorTop="fill-secondary-dark"
              colorBottom="fill-secondary-light"
              className="md:h-8 h-6"
            />
          </Link>
          {(!isHomePage ||
            (isHomePage && windowSize.width < breakpoints.lg)) && (
            <Link href="/" aria-label="Link to home page">
              <Logo />
            </Link>
          )}
          <button
            className="flex items-center p-0"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            role="button"
            id="menu-button"
            aria-label="Menu Button"
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
        </div>
        <Menu isOpen={isOpen} closeMenu={closeMenu} />
      </nav>
    </header>
  );
}
