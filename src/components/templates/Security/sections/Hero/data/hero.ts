import { IHero } from "../Hero.types";

import { getAssetUrl } from "@utils/getAssetUrl";
export const hero: IHero = {
  title: "TotalControl",
  text: "WeProvideAComprehensive",
  textSec: "WantToExamine",
  textBtn: "VisitUsOnGitHub",
  imgUrl: getAssetUrl("/images/templates/security/hero/hero-image.svg"),
  imgWidth: 689,
  imgHeight: 538,
};
