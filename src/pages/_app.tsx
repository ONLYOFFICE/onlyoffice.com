import "@src/styles/global.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useUtmCookies } from "@src/utils/useUtmCookies";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }: AppProps) {
  useUtmCookies();

  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#cae796",
            color: "#333",
            width: "auto",
            minWidth: "auto",
            maxWidth: "none",
            whiteSpace: "nowrap",
          },
        }}
      />
    </>
  );
}

export default appWithTranslation(App);
