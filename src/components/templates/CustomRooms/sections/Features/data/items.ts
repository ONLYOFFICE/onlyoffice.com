import { IFeatureTextImage } from "@src/components/widgets/FeatureTextImage";

export const items: IFeatureTextImage[] = [
  {
    title: "Tailored",
    text: "TailoredDesc",
    image: {
      url: "TailoredImgUrl",
      url2x: "TailoredImgUrl2x",
    },
    imageHeight: 550,
  },
  {
    title: "Sophisticated",
    text: "SophisticatedDesc",
    links: [
      {
        href: "https://www.youtube.com/watch?v=5tzRL9Kxj1Y&feature=youtu.be",
        label: "WatchAVideoToLearnMore",
        isExternal: true,
      },
    ],
    image: {
      url: "SophisticatedImgUrl",
      url2x: "SophisticatedImgUrl2x",
    },
    imageHeight: 560,
  },
  {
    title: "CostEfectiveForAnyBudget",
    text: "CostEfectiveForAnyBudgetDesc",
    image: {
      url: "CostEfectiveForAnyBudgetImgUrl",
      url2x: "CostEfectiveForAnyBudgetImgUrl2x",
    },
    imageHeight: 504,
  },
];
