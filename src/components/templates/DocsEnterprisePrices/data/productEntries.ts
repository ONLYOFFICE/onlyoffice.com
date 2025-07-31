import { ILocale } from "@src/types/locale";

export const DocsEnterprisePricesBasicEntries = ({ locale }: ILocale) => {
  const isCNY = locale === "zh";

  return [
    {
      key: "basic1",
      id: "218",
      defaultPrice: isCNY ? "10500" : "1500",
    },
    {
      key: "basic2",
      id: "219",
      defaultPrice: isCNY ? "21000" : "3000",
    },
    {
      key: "basic3",
      id: "220",
      defaultPrice: isCNY ? "42000" : "6000",
    },
    {
      key: "plus1",
      id: ["218", "270"],
      defaultPrice: isCNY ? "14700" : "2100",
    },
    {
      key: "plus2",
      id: ["219", "271"],
      defaultPrice: isCNY ? "28560" : "4080",
    },
    {
      key: "plus3",
      id: ["220", "272"],
      defaultPrice: isCNY ? "55440" : "7920",
    },
    {
      key: "premium1",
      id: ["218", "273"],
      defaultPrice: isCNY ? "16800" : "2400",
    },
    {
      key: "premium2",
      id: ["219", "274"],
      defaultPrice: isCNY ? "32760" : "4680",
    },
    {
      key: "premium3",
      id: ["220", "275"],
      defaultPrice: isCNY ? "62160" : "8880",
    },
    {
      key: "basic3Years1",
      id: "285",
      defaultPrice: isCNY ? "27720" : "3960",
    },
    {
      key: "basic3Years2",
      id: "286",
      defaultPrice: isCNY ? "55440" : "7920",
    },
    {
      key: "basic3Years3",
      id: "287",
      defaultPrice: isCNY ? "110880" : "15840",
    },
    {
      key: "plus3Years1",
      id: ["285", "299"],
      defaultPrice: isCNY ? "38808" : "5544",
    },
    {
      key: "plus3Years2",
      id: ["286", "300"],
      defaultPrice: isCNY ? "75398.4" : "10771.2",
    },
    {
      key: "plus3Years3",
      id: ["287", "301"],
      defaultPrice: isCNY ? "146361.6" : "20908.8",
    },
    {
      key: "premium3Years1",
      id: ["285", "302"],
      defaultPrice: isCNY ? "44352" : "6336",
    },
    {
      key: "premium3Years2",
      id: ["286", "303"],
      defaultPrice: isCNY ? "86486.4" : "12355.2",
    },
    {
      key: "premium3Years3",
      id: ["287", "304"],
      defaultPrice: isCNY ? "164102.4" : "23443.2",
    },
  ];
};

export const DocsEnterprisePricesSupportEntries = ({ locale }: ILocale) => {
  const isCNY = locale === "zh";

  return [
    {
      key: "basicSupport1",
      base: "basic1",
      defaultPrice: isCNY ? "15750" : "2250",
    },
    {
      key: "basicSupport2",
      base: "basic2",
      defaultPrice: isCNY ? "31500" : "4500",
    },
    {
      key: "basicSupport3",
      base: "basic3",
      defaultPrice: isCNY ? "63000" : "9000",
    },
    {
      key: "plusSupport1",
      base: "plus1",
      extra: "basic1",
      defaultPrice: isCNY ? "19950" : "2850",
    },
    {
      key: "plusSupport2",
      base: "plus2",
      extra: "basic2",
      defaultPrice: isCNY ? "39060" : "5580",
    },
    {
      key: "plusSupport3",
      base: "plus3",
      extra: "basic3",
      defaultPrice: isCNY ? "76440" : "10920",
    },
    {
      key: "premiumSupport1",
      base: "premium1",
      extra: "basic1",
      defaultPrice: isCNY ? "22050" : "3150",
    },
    {
      key: "premiumSupport2",
      base: "premium2",
      extra: "basic2",
      defaultPrice: isCNY ? "43260" : "6180",
    },
    {
      key: "premiumSupport3",
      base: "premium3",
      extra: "basic3",
      defaultPrice: isCNY ? "83160" : "11880",
    },
    {
      key: "basic3YearsSupport1",
      base: "basic3Years1",
      defaultPrice: isCNY ? "41580" : "5940",
    },
    {
      key: "basic3YearsSupport2",
      base: "basic3Years2",
      defaultPrice: isCNY ? "83160" : "11880",
    },
    {
      key: "basic3YearsSupport3",
      base: "basic3Years3",
      defaultPrice: isCNY ? "166320" : "23760",
    },
    {
      key: "plus3YearsSupport1",
      base: "plus3Years1",
      extra: "basic3Years1",
      defaultPrice: isCNY ? "52668" : "7524",
    },
    {
      key: "plus3YearsSupport2",
      base: "plus3Years2",
      extra: "basic3Years2",
      defaultPrice: isCNY ? "103118.4" : "14731.2",
    },
    {
      key: "plus3YearsSupport3",
      base: "plus3Years3",
      extra: "basic3Years3",
      defaultPrice: isCNY ? "201801.6" : "28828.8",
    },
    {
      key: "premium3YearsSupport1",
      base: "premium3Years1",
      extra: "basic3Years1",
      defaultPrice: isCNY ? "58212" : "8316",
    },
    {
      key: "premium3YearsSupport2",
      base: "premium3Years2",
      extra: "basic3Years2",
      defaultPrice: isCNY ? "114206.4" : "16315.2",
    },
    {
      key: "premium3YearsSupport3",
      base: "premium3Years3",
      extra: "basic3Years3",
      defaultPrice: isCNY ? "219542.4" : "31363.2",
    },
  ];
};
