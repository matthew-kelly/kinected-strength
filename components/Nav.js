import Link from "next/link";
import Logo from "./Logo";
import { MenuButton } from "./MenuButton";
import { colors } from "../utils/theme";
import { useMenu } from "../lib/menuState";
import Menu from "./Menu";
import { KLogo } from "./shapes";
import { useRouter } from "next/router";

export default function Nav() {
  const { toggleMenu, closeMenu, isOpen } = useMenu();

  const router = useRouter();

  return (
    <>
      <nav>
        <div className="flex justify-between items-center px-16 py-12 fixed inset-0 z-[101] h-[128px] max-h-min bg-primary-dark bg-opacity-80">
          <Link href="/">
            <a>
              <KLogo
                width="30"
                colorRect="fill-primary-light"
                colorTop="fill-secondary-dark"
                colorBottom="fill-secondary-light"
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
