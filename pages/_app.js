import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import localFont from "@next/font/local";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { MenuStateProvider } from "../lib/menuState";
import "../styles/globals.css";
import LoadingScreen from "../components/LoadingScreen";
import { disableScroll, enableScroll } from "../utils/scroll";

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
  display: "swap",
  variable: "--font-raleway",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsHomePage(router.pathname === "/");
  }, [router.pathname]);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setIsLoading(true));
    router.events.on("routeChangeComplete", () => setIsLoading(false));
    router.events.on("routeChangeError", () => setIsLoading(false));

    return () => {
      router.events.off("routeChangeStart", () => setIsLoading(true));
      router.events.off("routeChangeComplete", () => setIsLoading(false));
      router.events.off("routeChangeError", () => setIsLoading(false));
    };
  }, [router.events]);

  useEffect(() => setIsLoading(false), []);

  useEffect(() => {
    if (isLoading) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isLoading]);

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
        <meta charSet="UTF-8" />
        <title>Kinected Strength</title>
      </Head>
      <div
        className={`${myFont.variable} min-h-screen flex flex-col overflow-x-clip bg-primary-dark`}
        id={isHomePage ? "home-page" : undefined}
      >
        <Nav />
        <main className="body">
          <LoadingScreen isLoading={isLoading} />
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </MenuStateProvider>
  );
}

export default MyApp;
