import { ILocale } from "@src/types/locale";

export const DeveloperEditionPricesEntries = ({ locale }: ILocale) => {
  const isCNY = locale === "zh";

  return [
    {
      key: "basicCloud",
      id: "309",
      defaultPrice: isCNY ? "84" : "12",
    },
    {
      key: "basicOnPremises",
      id: "199",
      defaultPrice: isCNY ? "13650" : "1950",
    },
    {
      key: "plusOnPremises",
      id: ["199", "305"],
      defaultPrice: isCNY ? "24500" : "3500",
    },
    {
      key: "premiumOnPremises",
      id: ["199", "306"],
      defaultPrice: isCNY ? "31500" : "4500",
    },
  ];
};
