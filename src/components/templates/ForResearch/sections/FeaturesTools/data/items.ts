import { IFeatureItem } from "@src/components/widgets/FeatureItem";

interface IFeatureItemExtended extends IFeatureItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const items: IFeatureItemExtended[] = [
  {
    icon: {
      url: "/images/templates/for-research/features_tools/icons.svg",
      positionX: "0px",
      isSprite: true
    },
    heading: "FeatureToolsHead1",
    text: "FeatureToolsText1",
  },
  {
    icon: {
      url: "/images/templates/for-research/features_tools/icons.svg",
      positionX: "-123px",
      isSprite: true
    },
    heading: "FeatureToolsHead2",
    text: "FeatureToolsText2",
    link: {
      href: "/security.aspx#data_encryption",
      label: "LearnMoreTools",
      isExternal: false
    },
  },
  {
    icon: {
      url: "/images/templates/for-research/features_tools/icons.svg",
      positionX: "-242px",
      isSprite: true
    },
    heading: "FeatureHead3",
    text: "FeatureToolsText3",
    link: {
      href: "/private-rooms.aspx?from=for-research",
      label: "LearnMoreTools",
      isExternal: false
    },
  },
  {
    icon: {
      url: "/images/templates/for-research/features_tools/icons.svg",
      positionX: "-365px",
      isSprite: true
    },
    heading: "FeatureToolsHead4",
    text: "FeatureToolsText4",
    link: {
      href: "/security.aspx#access_control",
      label: "LearnMoreTools",
      isExternal: false
    },
  },
  {
    icon: {
      url: "/images/templates/for-research/features_tools/icons.svg",
      positionX: "-482px",
      isSprite: true
    },
    heading: "FeatureToolsHead5",
    text: "FeatureToolsText5",
    link: {
      href: "https://www.onlyoffice.com/blog/2018/05/how-onlyoffice-complies-with-gdpr/",
      label: "LearnMoreTools",
      isExternal: true
    },
  },
];
