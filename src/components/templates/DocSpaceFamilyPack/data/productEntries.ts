import { ILocale } from "@src/types/locale";

export const DocSpaceFamilyPackEntries = ({ locale }: ILocale) => {
  const isCNY = locale === "zh";

  return [{ key: "basic", id: "315", defaultPrice: isCNY ? "2390" : "330" }];
};
