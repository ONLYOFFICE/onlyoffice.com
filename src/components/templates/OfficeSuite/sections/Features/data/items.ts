import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export const items: IFeatureImageItem[] = [
  {
    heading: "Create",
    text: "CreateText",
    contentWidth: 320,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    image: {
      url: "CreateImgUrl",
      url2x: "CreateImgUrl2x",
      height: 640,
      width: 780,
    },
  },
  {
    heading: "Edit",
    text: "EditText",
    contentWidth: 320,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    links: [
      {
        href: "/app-directory",
        label: "FindPlugins",
        isExternal: true,
      },
    ],
    image: {
      url: "EditImgUrl",
      url2x: "EditImgUrl2x",
      height: 580,
      width: 780,
    },
  },
  {
    heading: "Work",
    text: "WorkText",
    contentWidth: 320,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    links: [
      {
        href: "/ai-assistants",
        label: "LearnMore",
      },
    ],
    image: {
      url: "WorkImgUrl",
      url2x: "WorkImgUrl2x",
      height: 580,
      width: 780,
    },
  },
  {
    heading: "Collaborate",
    text: "CollaborateText",
    contentWidth: 320,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    links: [
      {
        href: "/seamless-collaboration",
        label: "LearnMore",
      },
    ],
    image: {
      url: "CollaborateImgUrl",
      url2x: "CollaborateImgUrl2x",
      height: 580,
      width: 780,
    },
  },
  {
    heading: "Customize",
    text: "CustomizeText",
    contentWidth: 320,
    gap: { desktop: 16, tablet: 0, tabletS: 0, mobile: 0 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    image: {
      url: "CustomizeImgUrl",
      url2x: "CustomizeImgUrl2x",
      height: 640,
      width: 780,
    },
  },
];
