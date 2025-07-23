import { ILocale } from "@src/types/locale";

export const WorkspacePricesEntries = ({ locale }: ILocale) => {
  const isCNY = locale === "zh";

  return [
    { key: "basic50", id: "257", defaultPrice: isCNY ? "15400" : "2200" },
    { key: "basic100", id: "258", defaultPrice: isCNY ? "30800" : "4400" },
    { key: "basic200", id: "259", defaultPrice: isCNY ? "61600" : "8800" },
    { key: "plus50", id: "261", defaultPrice: isCNY ? "23100" : "3300" },
    { key: "plus100", id: "262", defaultPrice: isCNY ? "46200" : "6600" },
    { key: "plus200", id: "263", defaultPrice: isCNY ? "92400" : "13200" },
    { key: "premium50", id: "265", defaultPrice: isCNY ? "31850" : "4450" },
    { key: "premium100", id: "266", defaultPrice: isCNY ? "62300" : "8900" },
    {
      key: "premium200",
      id: "267",
      defaultPrice: isCNY ? "124600" : "17800",
    },
  ];
};
