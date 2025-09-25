import i18n from "i18next";
import Backend from "i18next-fs-backend";

let initialized = false;

export async function getServerI18n(locale: string, ns: string[] = ["common"]) {
  if (!initialized) {
    await i18n.use(Backend).init({
      fallbackLng: "en",
      lng: locale,
      ns,
      defaultNS: ns[0] || "common",
      backend: {
        loadPath: process.cwd() + "/public/locales/{{lng}}/{{ns}}.json",
      },
      initImmediate: false,
    });
    initialized = true;
  } else {
    await i18n.changeLanguage(locale);

    const missing = ns.filter((n) => !i18n.hasResourceBundle(locale, n));
    if (missing.length > 0) {
      await i18n.loadNamespaces(missing);
    }
  }

  return i18n;
}
