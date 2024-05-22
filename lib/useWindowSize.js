import { useEffect, useState } from "react";
// import { debounce } from "../utils/debounce";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  // only executed client side
  useEffect(() => {
    // const handleResize = debounce(() => {
    //   setWindowSize({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });
    // }, 30);
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // get initial dimensions
    handleResize();

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
