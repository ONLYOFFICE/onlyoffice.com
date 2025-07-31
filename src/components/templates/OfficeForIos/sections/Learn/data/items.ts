import { ILearnItem } from "../Learn.types";

const items: ILearnItem[] = [
  {
    title: "LearnCardTitleRelease",
    text: "LearnMoreTextMeet",
    image: "/images/templates/office-for-ios/learn/item-image_1.png",
    links: [
      {
        href: "LearnMoreUrlLink1",
        label: "LearnMoreSubtitleRead",
      },
    ],
  },
  {
    title: "LearnCardTitleHints",
    text: "LearnMoreTextHandwriting",
    image: "/images/templates/office-for-ios/learn/item-image_2.png",
    links: [
      {
        href: "LearnMoreUrlLink2",
        label: "LearnMoreSubtitleLearn1",
      },
    ],
  },
  {
    title: "LearnCardTitleDeveloper",
    text: "LearnMoreTextHowMobile",
    image: "/images/templates/office-for-ios/learn/item-image_3.png",
    links: [
      {
        href: "LearnMoreUrlLink3",
        label: "LearnMoreSubtitleLearn2",
      },
    ],
  },
];

export { items };
