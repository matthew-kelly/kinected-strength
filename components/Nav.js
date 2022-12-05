import Link from "next/link";
import Logo from "./Logo";
import { MenuButton } from "./MenuButton";
import { colors } from "../utils/theme";
import { useMenu } from "../lib/menuState";
import Menu from "./Menu";
import { KLogo } from "./shapes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { debounce } from "../utils/debounce";

export default function Nav() {
  const { toggleMenu, closeMenu, isOpen } = useMenu();
  const router = useRouter();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    // current scroll position
    const currentScrollPos = window.scrollY;
    // set state based on location info
    const isVisible =
      (currentScrollPos > 128 &&
        prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
      currentScrollPos < 10;
    setVisible(isVisible);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    // do not fire on home page
    if (router.pathname !== "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [prevScrollPos, visible, handleScroll, router.pathname]);

  return (
    <>
      <nav>
        <div
          className={`flex justify-between items-center px-16 py-12 fixed inset-0 z-[101] h-32 max-h-min bg-primary-dark transition-[top] ease-in-out duration-300 ${
            visible ? "top-0" : "-top-32"
          }`}
        >
          {/* bg-opacity-80 */}
          <Link href="/">
            <a>
              <KLogo
                width="30"
                colorRect="fill-secondary-light"
                colorTop="fill-primary-light"
                colorBottom="fill-secondary-dark"
              />
            </a>
          </Link>
          {router.pathname !== "/" && (
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
              strokeWidth="4"
              color={colors["primary-light"]}
              lineProps={{ strokeLinecap: "round" }}
              width="28"
              height="24"
              style={{ cursor: "pointer", zIndex: 103 }}
            />
          </button>
        </div>
      </nav>
      <Menu isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
}
