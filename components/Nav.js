import Link from "next/link";
import Logo from "./Logo";
import { MenuButton } from "./MenuButton";
import { colors } from "../utils/theme";
import { useMenu } from "../lib/menuState";

export default function Nav() {
  const { toggleMenu, isOpen } = useMenu();

  return (
    <nav className="flex justify-between px-10 py-12">
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
    </nav>
  );
}
