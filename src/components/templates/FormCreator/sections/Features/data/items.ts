import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

interface IFeatureImageItemExtended extends IFeatureImageItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const items: IFeatureImageItemExtended[] = [
  {
    heading: "Feature1Title",
    text: "Feature1Desc",
    links: [
      {
        label: "Feature1Link",
        href: "templatesLink",
        isExternal: true,
      },
    ],
    image: {
      url: "Feature1ImgUrl",
      url2x: "Feature1ImgUrl2x",
      height: 530,
    },
  },
  {
    heading: "Feature2Title",
    text: "Feature2Desc",
    links: [{ label: "Feature2Link", href: "/see-it-in-action" }],
    image: {
      url: "Feature2ImgUrl",
      url2x: "Feature2ImgUrl2x",
      height: 530,
    },
  },
  {
    heading: "Feature3Title",
    text: "Feature3Desc",
    image: {
      url: "Feature3ImgUrl",
      url2x: "Feature3ImgUrl2x",
      height: 440,
    },
  },
  {
    heading: "Feature4Title",
    text: "Feature4Desc",
    links: [
      {
        label: "Feature4Link",
        href: "templatesLink",
        isExternal: true,
      },
    ],
    textLinks: [
      { href: "/docspace-registration" },
      { href: "/download-desktop" },
      { href: "/download-desktop#mobile" },
    ],
    image: {
      url: "Feature4ImgUrl",
      url2x: "Feature4ImgUrl2x",
      height: 440,
    },
  },
  {
    heading: "Feature5Title",
    text: "Feature5Desc",
    image: {
      url: "Feature5ImgUrl",
      url2x: "Feature5ImgUrl2x",
      height: 440,
    },
  },
  {
    heading: "Feature6Title",
    text: "Feature6Desc",
    comingSoon: "Feature6ComingSoon",
    image: {
      url: "Feature6ImgUrl",
      height: 440,
    },
  },
];
