import { IGetStartedItem } from "../GetStarted.types";

export const smallItems: IGetStartedItem[] = [
  {
    imgUrl: "/images/templates/see-it-in-action/getStarted/docspace.svg",
    heading: "GetStartedItemTitleInOnlyOffice",
    text: "GetStartedItemTextCreate",
    linkName: "GetStartedItemLinkStart",
    linkUrl: "/download-desktop",
  },
  {
    imgUrl: "/images/templates/see-it-in-action/getStarted/connectors.svg",
    heading: "GetStartedItemTitleYouUse",
    text: "GetStartedItemTextConnect",
    linkName: "GetStartedItemLink",
    linkUrl: "/download#docs-enterprise",
  },
  {
    imgUrl: "/images/templates/see-it-in-action/getStarted/developers.svg",
    heading: "GetStartedItemTitleYouBuild",
    text: "GetStartedItemTextIntegrate",
    linkName: "GetStartedItemLinkLearn",
    linkUrl: "/developer-edition",
  },
];

export const largeItems: IGetStartedItem[] = [
  {
    imgUrl: "/images/templates/see-it-in-action/getStarted/from-pc.svg",
    heading: "GetStartedItemTitleYourPc",
    text: "GetStartedItemTextEdit",
    linkName: "GetStartedItemLinkDownload",
    linkUrl: "/download-desktop",
  },
  {
    imgUrl: "/images/templates/see-it-in-action/getStarted/from-mobile.svg",
    heading: "GetStartedItemTitleMobile",
    text: "GetStartedItemTextWork",
    linkName: "GetStartedItemLinkInstall",
    linkUrl: "/download-desktop#mobile",
  },
];
