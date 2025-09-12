import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
interface IFeatureItemExtended extends IFeatureItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const featureItems: IFeatureItemExtended[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_tools/icons.svg"),
      positionX: "0px",
      isSprite: true
    },
    heading: "FeatureToolsHead1",
    text: "FeatureToolsText1",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_tools/icons.svg"),
      positionX: "-123px",
      isSprite: true
    },
    heading: "FeatureToolsHead2",
    text: "FeatureToolsText2",
    link: {
      href: "/security#data_encryption",
      label: "LearnMoreTools",
      isExternal: false
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_tools/icons.svg"),
      positionX: "-242px",
      isSprite: true
    },
    heading: "FeatureToolsHead3",
    text: "FeatureToolsText3",
    link: {
      href: "/private-rooms?from=for-research",
      label: "LearnMoreTools",
      isExternal: false
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_tools/icons.svg"),
      positionX: "-365px",
      isSprite: true
    },
    heading: "FeatureToolsHead4",
    text: "FeatureToolsText4",
    link: {
      href: "/security#access_control",
      label: "LearnMoreTools",
      isExternal: false
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/for-research/features_tools/icons.svg"),
      positionX: "-482px",
      isSprite: true
    },
    heading: "FeatureToolsHead5",
    text: "FeatureToolsText5",
    link: {
      href: "HrefBlogTools",
      label: "LearnMoreTools",
      isExternal: true
    },
  },
];
