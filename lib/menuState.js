import { useState, createContext, useContext } from "react";
import { disableScroll, enableScroll } from "../utils/scroll";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }) {
  const [isOpen, setOpen] = useState(false);

  function toggleMenu() {
    if (!isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
    setOpen(!isOpen);
  }
  function openMenu() {
    setOpen(true);
    disableScroll();
  }
  function closeMenu() {
    setOpen(false);
    enableScroll();
  }

  return (
    <LocalStateProvider value={{ isOpen, toggleMenu, openMenu, closeMenu }}>
      {children}
    </LocalStateProvider>
  );
}

// custom hook for accessing the menu state
function useMenu() {
  const ctx = useContext(LocalStateContext);
  return ctx;
}

export { MenuStateProvider, useMenu };
