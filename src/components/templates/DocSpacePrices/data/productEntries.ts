import { ILocale } from "@src/types/locale";

export const DocSpacePricesEntries = ({ locale }: ILocale) => {
  const isCNY = locale === "zh";

  return [
    {
      key: "business",
      id: "1006",
      defaultPrice: isCNY ? "139" : "20",
    },
    {
      key: "enterpriseUsers100",
      id: "311",
      defaultPrice: isCNY ? "45850" : "6550",
    },
    {
      key: "enterpriseUsers250",
      id: "312",
      defaultPrice: isCNY ? "98700" : "14100",
    },
    {
      key: "enterpriseUsers500",
      id: "313",
      defaultPrice: isCNY ? "197400" : "28200",
    },
    {
      key: "enterpriseUsers1000",
      id: "314",
      defaultPrice: isCNY ? "394800" : "56400",
    },
  ];
};
