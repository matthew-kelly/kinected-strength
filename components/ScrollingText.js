import {
  m,
  // useScroll,
  // useSpring,
  useTransform,
  useMotionValue,
  // useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

export default function ScrollingText({
  baseVelocity = 100,
  textClass = "",
  children,
}) {
  const baseX = useMotionValue(0);
  // const { scrollY } = useScroll();
  // const scrollVelocity = useVelocity(scrollY);
  // const smoothVelocity = useSpring(scrollVelocity, {
  //   damping: 50,
  //   stiffness: 400,
  // });
  // const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
  //   clamp: false,
  // });
  const dir = baseVelocity > 0 ? 1 : -1;

  let repeats = 16;
  let wrapParams = [12.5 * dir, 0];

  // if (children.length > 8) {
  //   repeats = 4;
  //   wrapParams = [25 * dir, 0];
  // }

  const x = useTransform(
    baseX,
    (v) =>
      `${wrap(
        wrapParams[dir === 1 ? 1 : 0],
        wrapParams[dir === 1 ? 0 : 1],
        v
      )}%`
  );
  // const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    // moveBy += moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="m-0 whitespace-nowrap flex flex-nowrap relative">
      <m.div
        className="md:text-7xl text-6xl font-bold flex whitespace-nowrap flex-nowrap *:block *:mr-6 md:*:mr-12 *:select-none"
        style={{ x }}
      >
        {[...Array(repeats)].map((_, index) => (
          <span key={index} className={textClass}>
            {children}
          </span>
        ))}
      </m.div>
    </div>
  );
}
