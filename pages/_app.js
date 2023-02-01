import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { MenuStateProvider } from "../lib/menuState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(false);
  useEffect(() => {
    setIsHomePage(router.pathname === "/");
  }, [router.pathname]);
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
        className="min-h-screen flex flex-col overflow-x-clip bg-primary-dark"
        id={isHomePage ? "home-page" : undefined}
      >
        <Nav />
        <main className="body">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </MenuStateProvider>
  );
}

export default MyApp;
