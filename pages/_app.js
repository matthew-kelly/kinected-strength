import { MenuStateProvider, useMenu } from "../lib/menuState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MenuStateProvider>
      {getLayout(<Component {...pageProps} />)}
    </MenuStateProvider>
  );
}

export default MyApp;
