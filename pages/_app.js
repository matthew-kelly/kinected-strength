import Nav from "../components/Nav";
import { MenuStateProvider } from "../lib/menuState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MenuStateProvider>
      <Nav />
      <Component {...pageProps} />
    </MenuStateProvider>
  );
}

export default MyApp;
