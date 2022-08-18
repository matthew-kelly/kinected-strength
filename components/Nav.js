import Link from "next/link";
import Logo from "./Logo";
import { MenuButton } from "./MenuButton";
import { colors } from "../utils/theme";
import { useMenu } from "../lib/menuState";
import Menu from "./Menu";

export default function Nav() {
  const { toggleMenu, closeMenu, isOpen } = useMenu();

  return (
    <>
      <nav>
        <div className="flex justify-between px-8 py-6 absolute inset-0 z-50 max-h-min">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className="flex items-center">
            <MenuButton
              isOpen={isOpen}
              onClick={toggleMenu}
              strokeWidth="4"
              color={colors["primary-light"]}
              lineProps={{ strokeLinecap: "round" }}
              width="28"
              height="24"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </nav>
      <Menu isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
}
