const links: Record<string, { base: string; paths: Record<string, string> }> = {
  blog: {
    base: "https://www.onlyoffice.com/blog",
    paths: {
      en: "",
      nl: "",
      ru: "",
      pt: "/pt-br",
      zh: "/zh-hans",
    },
  },
  marketplace: {
    base: "https://www.onlyoffice.com/app-directory",
    paths: {
      pt: "",
      it: "",
      cs: "",
      nl: "",
    },
  },
  templates: {
    base: "https://templates.onlyoffice.com",
    paths: {
      cs: "",
      nl: "",
      ru: "",
    },
  },
};

export const getLink = (type: keyof typeof links, locale: string): string => {
  const { base, paths } = links[type];

  return `${base}${paths[locale] ?? `/${locale}`}`;
};
