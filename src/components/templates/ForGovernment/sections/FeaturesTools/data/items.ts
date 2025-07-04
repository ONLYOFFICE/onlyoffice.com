import { IFeatureItem } from "@src/components/widgets/FeatureItem";

interface IFeatureItemExtended extends IFeatureItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const featureItems: IFeatureItemExtended[] = [
  {
    icon: {
      url: "/images/templates/for-government/features_tools/icons.svg",
      positionX: "-18px",
      isSprite: true
    },
    heading: "FeatureToolsHead1",
    text: "FeatureToolsText1",
  },
  {
    icon: {
      url: "/images/templates/for-government/features_tools/icons.svg",
      positionX: "-123px",
      isSprite: true
    },
    heading: "FeatureToolsHead2",
    text: "FeatureToolsText2",
    link: {
      href: "https://github.com/ONLYOFFICE/",
      label: "VisitGitHub",
      isExternal: true
    },
  },
  {
    icon: {
      url: "/images/templates/for-government/features_tools/icons.svg",
      positionX: "-247px",
      isSprite: true
    },
    heading: "FeatureToolsHead3",
    text: "FeatureToolsText3",
    link: {
      href: "/security#data_encryption",
      label: "LearnMoreTools",
      isExternal: false
    },
  },
  {
    icon: {
      url: "/images/templates/for-government/features_tools/icons.svg",
      positionX: "-358px",
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
      url: "/images/templates/for-government/features_tools/icons.svg",
      positionX: "-458px",
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
