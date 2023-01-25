import Link from "next/link";
import Logo from "./Logo";
import { MenuButton } from "./MenuButton";
import { breakpoints, colors } from "../utils/theme";
import { useMenu } from "../lib/menuState";
import Menu from "./Menu";
import { KLogo } from "./shapes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWindowSize } from "../lib/useWindowSize";
import { useScrollDirection } from "../lib/useScrollDirection";

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
    <>
      <nav
        id="nav-main"
        className={`sticky flex justify-between items-center md:px-16 px-4 z-[101] md:h-32 h-20 transition-[top] ease-in-out duration-300 ${
          !isHomePage && scrollDirection === "down"
            ? "md:-top-32 -top-20"
            : "top-0"
        } ${isHomePage ? "bg-transparent" : "bg-primary-dark"}`}
      >
        {/* bg-opacity-80 */}
        <Link href="/">
          <a>
            <KLogo
              width="30"
              colorRect="fill-primary-light"
              colorTop="fill-secondary-dark"
              colorBottom="fill-secondary-light"
              className="md:h-8 h-6"
            />
          </a>
        </Link>
        {isHomePage ? (
          <div>
            <Logo noHover={true} />
          </div>
        ) : (
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        )}
        <button
          className="flex items-center p-0"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          role="menu button"
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
    </>
  );
}
