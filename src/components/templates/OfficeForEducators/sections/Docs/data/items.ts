import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

interface IFeatureImageItemExtended extends IFeatureImageItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const items: IFeatureImageItemExtended[] = [
  {
    title: "SeamlessAndUserFriendly",
    text: "SeamlessAndUserFriendlyDesc",
    textLinks: [
      {
        href: "/document-editor",
      },
      {
        href: "/spreadsheet-editor",
      },
      {
        href: "/presentation-editor",
      },
      {
        href: "/pdf-editor",
      },
    ],
    image: {
      url: "SeamlessAndUserFriendlyImgUrl",
      url2x: "SeamlessAndUserFriendlyImgUrl2x",
      height: 538,
    },
  },
  {
    title: "TailoredToCreate",
    text: "TailoredToCreateDesc",
    textLinks: [
      {
        href: "/ai-assistants",
      },
    ],
    image: {
      url: "TailoredToCreateImgUrl",
      url2x: "TailoredToCreateImgUrl2x",
      height: 500,
    },
  },
  {
    title: "RatingYourStudentsEssays",
    text: "RatingYourStudentsEssaysDesc",
    image: {
      url: "RatingYourStudentsEssaysImgUrl",
      url2x: "RatingYourStudentsEssaysImgUrl2x",
      height: 500,
    },
  },
  {
    title: "YourOnlineLibrarysBestFriend",
    text: [
      "YourOnlineLibrarysBestFriendDesc1",
      "YourOnlineLibrarysBestFriendDesc2",
      "YourOnlineLibrarysBestFriendDesc3",
    ],
    textLinks: [
      {
        href: "/document-templates",
      },
    ],
    image: {
      url: "YourOnlineLibrarysBestFriendImgUrl",
      url2x: "YourOnlineLibrarysBestFriendImgUrl2x",
      height: 494,
    },
  },
];
