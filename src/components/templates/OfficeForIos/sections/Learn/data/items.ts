import { ILearnItem } from "../Learn.types";

const items: ILearnItem[] = [
  {
    title: "LearnCardTitleRelease",
    text: "LearnMoreTextMeet",
    image: "/images/templates/office-for-ios/learn/item-image_1.png",
    links: [
      {
        href: "https://www.onlyoffice.com/blog/2022/10/onlyoffice-documents-v7-2-for-ios",
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
        href: "https://helpcenter.onlyoffice.com/mobile/ios/documents/document-editor/basic-operations/handwriting.aspx",
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
        href: "https://www.onlyoffice.com/blog/2022/07/onlyoffice-for-developers-how-the-mobile-integration-works",
        label: "LearnMoreSubtitleLearn2",
      },
    ],
  },
];

export { items };
