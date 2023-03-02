import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import localFont from "@next/font/local";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { MenuStateProvider } from "../lib/menuState";
import "../styles/globals.css";
import LoadingScreen from "../components/LoadingScreen";
// import { disableScroll, enableScroll } from "../utils/scroll";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Raleway-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  display: "block", // "swap"
  variable: "--font-raleway",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const startLoading = () => {
  //   disableScroll();
  //   setIsLoading(true);
  // };

  // const stopLoading = () => {
  //   setIsLoading(false);
  //   setTimeout(() => enableScroll(), 300); // length of exit animation
  // };

  useEffect(() => {
    setIsHomePage(router.pathname === "/");
  }, [router.pathname]);

  // useEffect(() => {
  //   router.events.on("routeChangeStart", startLoading);
  //   router.events.on("routeChangeComplete", stopLoading);
  //   router.events.on("routeChangeError", stopLoading);

  //   return () => {
  //     router.events.off("routeChangeStart", startLoading);
  //     router.events.off("routeChangeComplete", stopLoading);
  //     router.events.off("routeChangeError", stopLoading);
  //   };
  // }, [router.events]);

  useEffect(() => setIsLoading(false), []);

  return (
    <MenuStateProvider>
      <Head>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta charSet="UTF-8" />
        <title key="title">Kinected Strength</title>
      </Head>
      <div
        className={`${myFont.variable} min-h-screen flex flex-col overflow-x-clip bg-primary-dark app-container`}
        id={isHomePage ? "home-page" : undefined}
      >
        <Nav />
        <main className="body">
          <LoadingScreen isLoading={isLoading} />
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <Analytics />
    </MenuStateProvider>
  );
}

export default MyApp;
