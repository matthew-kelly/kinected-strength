import {
  createContext,
  useContext,
  useEffect,
  // useLayoutEffect,
  useRef,
} from "react";
import { useMotionValue } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "@/lib/gsap";
import clamp from "@/utils/clamp";

const ScrollTriggerContext = createContext(null);

const useScrollTrigger = () => useContext(ScrollTriggerContext);

const DEFAULT_OPTIONS = {
  end: "+=50%", //"+=100%"
  // pin: true,
  pin: false,
  scrub: true,
  start: "top top",
};

// matrix3d(1,   0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0, -2340,  0, 1);
// matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4,    b4, c4, d4);

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
            console.log(progress.get());
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
