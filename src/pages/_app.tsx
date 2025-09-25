import "@src/styles/global.css";
import { useEffect } from "react";
import { appWithTranslation, useTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { useUtmCookies } from "@src/utils/useUtmCookies";
import { useIPGeolocationStore } from "@src/store/useIPGeolocationStore";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  useUtmCookies();
  const router = useRouter();
  const { i18n } = useTranslation();

  const { setIPGeolocationInfo } = useIPGeolocationStore();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/ip-geolocation");
      const data = await res.json();
      setIPGeolocationInfo(data);
    })();
  }, [setIPGeolocationInfo]);

  useEffect(() => {
    if (typeof window === "undefined" || !router.locale || !i18n) return;
    if (typeof i18n.changeLanguage !== "function") return;

    if (i18n.language !== router.locale) {
      i18n.changeLanguage(router.locale).catch(() => {});
    }
  }, [router.locale, i18n]);

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
