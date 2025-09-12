import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
interface IFeatureItemExtended extends IFeatureItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const items: IFeatureItemExtended[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_icons/icons.svg"),
      positionX: "0px",
      isSprite: true
    },
    heading: "FeatureHead1",
    text: "FeatureText1",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_icons/icons.svg"),
      positionX: "-123px",
      isSprite: true
    },
    heading: "FeatureHead2",
    text: "FeatureText2",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_icons/icons.svg"),
      positionX: "-242px",
      isSprite: true
    },
    heading: "FeatureHead3",
    text: "FeatureText3",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_icons/icons.svg"),
      positionX: "-365px",
      isSprite: true
    },
    heading: "FeatureHead4",
    text: "FeatureText4",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_icons/icons.svg"),
      positionX: "-482px",
      isSprite: true
    },
    heading: "FeatureHead5",
    text: "FeatureText5",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_icons/icons.svg"),
      positionX: "-603px",
      isSprite: true
    },
    heading: "FeatureHead6",
    text: "FeatureText6",
  },
];
