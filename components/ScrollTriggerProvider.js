import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { useMotionValue } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "../lib/gsap";
import clamp from "../utils/clamp";

const ScrollTriggerContext = createContext(null);

const useScrollTrigger = () => useContext(ScrollTriggerContext);

const DEFAULT_OPTIONS = {
  // end: "+=50%", //"+=100%"
  // pin: true, // false
  pin: false,
  scrub: true,
  start: "top top",
};

const ScrollTriggerProvider = ({ children, debug = false, options = {} }) => {
  const refScrollTrigger = useRef(null);
  const refTimeline = useRef();
  const progress = useMotionValue(0);

  // useLayoutEffect(() => {
  useEffect(() => {
    if (refScrollTrigger.current) {
      refTimeline.current = gsap.timeline({
        scrollTrigger: {
          ...DEFAULT_OPTIONS,
          ...options,
          markers: debug,
          trigger: refScrollTrigger.current,
          onUpdate: (instance) => {
            progress.set(clamp(instance.progress, 0, 1));
          },
        },
      });
    }

    return () => {
      // Kill and clear the timeline and scrolltrigger instance when updated/unmounted.
      refTimeline.current?.scrollTrigger?.kill();
      refTimeline.current?.kill();
      refTimeline.current?.clear();
    };
  }, [debug, options, progress]);

  return (
    <div ref={refScrollTrigger}>
      <ScrollTriggerContext.Provider value={progress}>
        {children}
      </ScrollTriggerContext.Provider>
    </div>
  );
};

export { ScrollTriggerProvider, useScrollTrigger };
