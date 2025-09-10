import "@src/styles/global.css";
import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { useUtmCookies } from "@src/utils/useUtmCookies";
import { useIPGeolocationStore } from "@src/store/useIPGeolocationStore";

function App({ Component, pageProps }: AppProps) {
  useUtmCookies();

  const { setIPGeolocationInfo } = useIPGeolocationStore();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/ip-geolocation");
      const data = await res.json();
      setIPGeolocationInfo(data);
    })();
  }, [setIPGeolocationInfo]);

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
