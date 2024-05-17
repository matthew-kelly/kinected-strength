import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  m,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useMenu } from "../lib/menuState";
import { useWindowSize } from "../lib/useWindowSize";
import bannerImg from "../public/images/main-page-1.jpg";
import clamp from "../utils/clamp";

export default function HomeBanner() {
  const { isOpen } = useMenu();

  const bannerRef = useRef(null);
  const bannerImageRef = useRef(null);
  const scrollRef = useRef(null);

  const windowSize = useWindowSize();
  const [logoWidth, setLogoWidth] = useState(0);
  const [logoTop, setLogoTop] = useState(0);
  const bannerImageSidePadding = 128;
  const navHeight = 64; // 128;

  // FIXME: title not appearing on load with lazyloading framer-motion library

  // TODO: load in with progress set (no jumping on first scroll)

  const progress = useMotionValue(0);

  const setScrollPosition = () => {
    const base =
      bannerRef.current.getBoundingClientRect().height -
      window.innerHeight +
      navHeight;
    const bannerDist = clamp(
      bannerRef.current.getBoundingClientRect().bottom -
        window.innerHeight +
        navHeight,
      0,
      bannerRef.current.getBoundingClientRect().bottom + navHeight
    );
    const calcPos = 1 - bannerDist / base;
    progress.set(clamp(calcPos, 0, 1));
  };

  useEffect(() => {
    window.addEventListener("scroll", setScrollPosition);
    return () => {
      window.removeEventListener("scroll", setScrollPosition);
    };
  }, []);

  // update progress on window resize
  useEffect(() => {
    setScrollPosition();
  }, [windowSize.width]);

  const animationSteps = [0, 1];

  const logoContainerTop = useTransform(progress, animationSteps, [
    logoTop,
    34,
  ]);
  const logoStylesWidth = useTransform(progress, animationSteps, [
    logoWidth,
    256,
  ]);
  const bannerPaddingLeft = useTransform(progress, animationSteps, [
    bannerImageSidePadding,
    0,
  ]);
  const bannerPaddingRight = useTransform(progress, animationSteps, [
    bannerImageSidePadding,
    0,
  ]);

  useEffect(() => {
    const img = bannerImageRef.current.children[0];
    const imgDimensions = img.getBoundingClientRect();
    const currentProgress = progress.get();
    const newLogoWidth =
      (imgDimensions.width - bannerImageSidePadding * 2 * currentProgress) *
      0.78;
    let newLogoTop;
    if (currentProgress >= 1) {
      newLogoTop = Math.round(imgDimensions.width * 0.457 - 52); // position at progress = 0
    } else if (currentProgress > 0 && currentProgress < 1) {
      newLogoTop = Math.round(imgDimensions.width * 0.345 + 126); // good enough
    } else {
      newLogoTop = Math.round(imgDimensions.width * 0.449 + 129);
    }
    setLogoWidth(newLogoWidth);
    setLogoTop(newLogoTop);

    // TODO: make banner image scroll up with flow of document once progress = 1
  }, [windowSize.width, progress]);

  return (
    <div
      id="bannerContainer"
      className="flex flex-col h-[120vw]"
      ref={bannerRef}
    >
      <LayoutGroup>
        <m.div
          id="banner-image-container"
          ref={bannerImageRef}
          layout
          className={`self-center w-full z-0 fixed mt-32`}
          style={{
            paddingLeft: bannerPaddingLeft,
            paddingRight: bannerPaddingRight,
          }}
        >
          <Image
            id="bannerImage"
            src={bannerImg}
            priority
            sizes="100vw"
            quality={90}
            alt="Briana, Andrea, and Jess walking along a dock"
            className="z-0"
            placeholder="blur"
          />
        </m.div>

        <AnimatePresence>
          {!isOpen && (
            <m.div
              id="home-logo"
              ref={scrollRef}
              className="fixed left-1/2 transform -translate-x-1/2"
              style={{
                top: logoContainerTop,
                zIndex: 102,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              exit={{
                opacity: [1, 0],
                paddingRight: [16, 16],
                transition: { duration: 0.3 },
              }}
            >
              <m.svg
                // height="200"
                alt="Kinected Strength"
                width={logoStylesWidth}
                viewBox="0 0 192 45"
                className="fill-primary-light m-auto"
              >
                <path d="M7.20703 18.0527L9.75586 15.4307L15.5127 24H21.3721L13.2861 12.3691L21.0352 4.10742H14.9561L7.20703 12.4863V4.10742H2.3877V24H7.20703V18.0527ZM29.5107 4.10742V24H34.3301V4.10742H29.5107ZM49.9102 11.9883L59.8564 24H64.0312V4.10742H59.2119V16.2363L49.1924 4.10742H45.0908V24H49.9102V11.9883ZM89.0449 24V19.957H79.6113V15.8994H87.7412V11.8564H79.6113V8.16504H88.8984V4.10742H74.792V24H89.0449ZM107.145 24.293C109.02 24.293 110.748 23.8535 112.315 22.9746C113.883 22.1104 115.143 20.8799 116.095 19.3125L112.403 16.6172C111.012 18.7266 109.254 19.7812 107.145 19.7812C105.489 19.7812 104.142 19.2393 103.131 18.1553C102.105 17.0859 101.593 15.709 101.593 14.0391C101.593 12.3691 102.105 10.9922 103.131 9.92285C104.142 8.85352 105.489 8.32617 107.145 8.32617C107.921 8.32617 108.653 8.47266 109.312 8.75098C110.631 9.33691 111.437 10.1865 112.315 11.5195L116.021 8.78027C115.113 7.27148 113.854 6.07031 112.242 5.16211C110.616 4.26855 108.917 3.81445 107.145 3.81445C105.196 3.81445 103.424 4.25391 101.827 5.13281C100.23 6.02637 98.9707 7.24219 98.0479 8.80957C97.125 10.377 96.6562 12.1201 96.6562 14.0391C96.6562 15.958 97.125 17.7012 98.0479 19.2686C98.9707 20.8359 100.23 22.0664 101.827 22.96C103.424 23.8535 105.196 24.293 107.145 24.293ZM128.599 8.25293V24H133.403V8.25293H139.277V4.10742H122.71V8.25293H128.599ZM162.123 24V19.957H152.689V15.8994H160.819V11.8564H152.689V8.16504H161.977V4.10742H147.87V24H162.123ZM180.296 24C181.673 24 182.991 23.7363 184.251 23.209C185.496 22.6816 186.58 21.9785 187.488 21.085C188.382 20.1914 189.1 19.1367 189.642 17.9062C190.169 16.6758 190.433 15.3867 190.433 14.0391C190.433 11.3291 189.29 8.76562 187.488 6.99316C186.58 6.11426 185.496 5.41113 184.251 4.88379C182.991 4.37109 181.673 4.10742 180.296 4.10742H171.595V24H180.296ZM176.414 8.16504H179.827C181.468 8.16504 182.815 8.73633 183.87 9.86426C184.925 10.9922 185.452 12.3838 185.452 14.0391C185.452 15.6943 184.925 17.0859 183.87 18.2285C182.815 19.3857 181.468 19.957 179.827 19.957H176.414V8.16504Z" />
                <path d="M56.3857 40.5742C56.6299 41.0576 57.0059 41.4336 57.5137 41.6973C58.0166 41.9658 58.5781 42.0977 59.1934 42.0977C59.8428 42.0977 60.4678 41.9268 60.9756 41.6094C61.4785 41.292 61.8057 40.7451 61.8057 40.0811C61.8301 39.4854 61.5566 39.0605 61.1758 38.7627C61.0537 38.665 60.8926 38.5674 60.6924 38.4697C60.4922 38.377 60.2969 38.2939 60.1113 38.2207C59.9258 38.1523 59.6914 38.0693 59.4082 37.9766C59.335 37.9521 59.2373 37.918 59.1201 37.8789C58.8809 37.8057 58.8027 37.7812 58.6318 37.7178C58.4561 37.6543 58.3975 37.6006 58.3047 37.5176C58.2119 37.4395 58.1826 37.3418 58.1826 37.2197C58.1826 36.9023 58.5049 36.6826 58.9688 36.6826C59.5059 36.6826 59.9795 36.9756 60.3896 37.5615L61.5762 36.6875C60.9268 35.7451 60.0576 35.2715 58.9688 35.2715C58.5586 35.2715 58.1729 35.3496 57.8115 35.5059C57.4453 35.6621 57.1475 35.8916 56.9131 36.1992C56.6787 36.5068 56.5615 36.8584 56.5615 37.249C56.5811 37.835 56.7422 38.2305 57.084 38.5283C57.3232 38.7432 57.5137 38.8701 57.8652 39.0117C58.0361 39.085 58.1924 39.1387 58.3242 39.1826C58.4561 39.2266 58.6221 39.2803 58.8271 39.3438C58.8711 39.3584 58.9395 39.3779 59.0225 39.4023C59.3203 39.4902 59.5303 39.5586 59.6572 39.6025C59.7793 39.6465 59.9014 39.7148 60.0137 39.8076C60.126 39.9004 60.1846 40.0127 60.1846 40.1348C60.1846 40.2861 60.0918 40.4082 59.9111 40.501C59.7256 40.5986 59.501 40.6475 59.2324 40.6475C58.5879 40.6475 57.9678 40.2812 57.5918 39.6953L56.3857 40.5742ZM68.042 36.751V42H69.6436V36.751H71.6016V35.3691H66.0791V36.751H68.042ZM78.0674 39.7148H79.1758L80.4307 42.0049H82.1641L80.7773 39.5244C81.1729 39.3535 81.4902 39.0947 81.7295 38.7432C81.9639 38.3916 82.0811 37.9863 82.0811 37.5225C82.0811 36.8975 81.8613 36.3799 81.4268 35.9746C80.9873 35.5693 80.4502 35.3691 79.8154 35.3691H76.4658V42H78.0674V39.7148ZM79.4688 36.7363C80.0596 36.7363 80.4355 37.0684 80.4355 37.5225C80.4355 38.0059 80.0596 38.3477 79.4688 38.3477H78.0674V36.7363H79.4688ZM91.9258 42V40.6523H88.7812V39.2998H91.4912V37.9521H88.7812V36.7217H91.877V35.3691H87.1748V42H91.9258ZM98.6895 37.9961L102.005 42H103.396V35.3691H101.79V39.4121L98.4502 35.3691H97.083V42H98.6895V37.9961ZM108.549 38.6797C108.549 39.3193 108.705 39.8955 109.013 40.418C109.32 40.9404 109.74 41.3506 110.272 41.6484C110.805 41.9463 111.396 42.0977 112.045 42.0977C112.66 42.0977 113.222 41.9658 113.729 41.7021C114.232 41.4385 114.633 41.0674 114.931 40.5938C115.224 40.1201 115.37 39.5879 115.37 39.002C115.37 38.7334 115.36 38.499 115.341 38.3086H111.889V39.6562H113.637C113.437 40.2617 112.821 40.5938 112.045 40.5938C111.493 40.5938 111.049 40.4131 110.707 40.0518C110.365 39.6953 110.194 39.2363 110.194 38.6797C110.194 38.123 110.365 37.6641 110.707 37.3076C111.049 36.9512 111.493 36.7754 112.045 36.7754C112.704 36.7754 113.241 37.0732 113.656 37.6738L114.892 36.7607C114.599 36.3262 114.198 35.9648 113.69 35.6865C113.178 35.4082 112.631 35.2715 112.045 35.2715C111.073 35.2715 110.18 35.6426 109.56 36.2432C108.935 36.8438 108.549 37.7227 108.549 38.6797ZM121.499 36.751V42H123.101V36.751H125.059V35.3691H119.536V36.751H121.499ZM129.923 42H131.529V39.29H134.4V42H136.007V35.3691H134.4V37.9424H131.529V35.3691H129.923V42Z" />
              </m.svg>
            </m.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}
