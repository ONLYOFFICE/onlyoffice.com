import { ILocale } from "@src/types/locale";

export const DocsHomeServerEntries = ({ locale }: ILocale) => {
  const isCNY = locale === "zh";

  return [{ key: "basic", id: "256", defaultPrice: isCNY ? "1043" : "149" }];
};
