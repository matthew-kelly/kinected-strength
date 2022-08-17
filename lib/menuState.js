import { useState, createContext, useContext } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }) {
  const [isOpen, setOpen] = useState(false);

  function toggleMenu() {
    console.log("toggleMenu", !isOpen);
    setOpen(!isOpen);
  }
  function openMenu() {
    setOpen(true);
  }
  function closeMenu() {
    setOpen(false);
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
