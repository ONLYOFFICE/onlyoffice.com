import i18next from "i18next";
import Backend from "i18next-fs-backend";

if (!i18next.isInitialized) {
  i18next.use(Backend).init({
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    backend: {
      loadPath: process.cwd() + "/public/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  });
}

const loaded = new Set<string>();

export async function getT(lang: string, ns: string | string[]) {
  const namespaces = Array.isArray(ns) ? ns : [ns];

  if (i18next.language !== lang) {
    await i18next.changeLanguage(lang);
  }

  const toLoad = namespaces.filter((n) => !loaded.has(`${lang}:${n}`));
  if (toLoad.length > 0) {
    await i18next.loadNamespaces(toLoad);
    toLoad.forEach((n) => loaded.add(`${lang}:${n}`));
  }

  return i18next.getFixedT(lang, namespaces);
}
