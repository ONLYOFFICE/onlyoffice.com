const links: Record<string, { base: string; paths: Record<string, string> }> = {
  blog: {
    base: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    paths: {
      en: "",
      nl: "",
      ru: "",
      pt: "/pt-br",
      zh: "/zh-hans",
    },
  },
  marketplace: {
    base: `${process.env.NEXT_PUBLIC_SITE_URL}/app-directory`,
    paths: {
      en: "",
      pt: "",
      it: "",
      cs: "",
      nl: "",
      sr: "",
    },
  },
  templates: {
    base: "https://templates.onlyoffice.com",
    paths: {
      en: "",
      cs: "",
      nl: "",
      ru: "",
      sr: "",
    },
  },
};

export const getLink = (type: keyof typeof links, locale: string): string => {
  const { base, paths } = links[type];

  return `${base}${paths[locale] ?? `/${locale}`}`;
};
