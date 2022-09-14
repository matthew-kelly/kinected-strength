import { MenuStateProvider, useMenu } from "../lib/menuState";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MenuStateProvider>
      <div className="min-h-screen flex flex-col overflow-x-clip bg-primary-dark">
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
