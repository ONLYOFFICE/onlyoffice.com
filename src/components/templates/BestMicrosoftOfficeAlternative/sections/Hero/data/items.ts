import { IBestAlternativeHero } from "@src/components/modules/best-alternative/BestAlternativeHero/BestAlternativeHero.types";

import { getAssetUrl } from "@utils/getAssetUrl";
export const comparisonLogos: IBestAlternativeHero["comparisonLogos"] = [
  {
    src: getAssetUrl("/images/templates/best-microsoft-office-alternative/hero/onlyoffice.svg"),
    alt: "ONLYOFFICE",
    type: "onlyoffice",
  },
  {
    src: getAssetUrl("/images/templates/best-microsoft-office-alternative/hero/versus.svg"),
    alt: "Versus",
    type: "versus",
  },
  {
    src: getAssetUrl("/images/templates/best-microsoft-office-alternative/hero/ms-office.svg"),
    alt: "Adobe",
    type: "microsoft-office",
  },
];
