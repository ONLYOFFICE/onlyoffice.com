import "@src/styles/global.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useUtmCookies } from "@src/utils/useUtmCookies";

function App({ Component, pageProps }: AppProps) {
  useUtmCookies();

  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
