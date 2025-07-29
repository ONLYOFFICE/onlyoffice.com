import { ISolutionCard } from "@src/components/widgets/SolutionCard";

interface ISolutionCardExtended extends Omit<ISolutionCard, "text"> {
  text?: { label?: string; links?: { url: string }[] } | string;
}

export interface IGetStartedItems {
  items: ISolutionCardExtended[];
  largeItems: ISolutionCard[];
}

export const items: IGetStartedItems = {
  items: [
    {
      imgUrl: "/images/templates/main/get-started/docspace.svg",
      heading: "InOODocSpace",
      text: "CreateRoomsWithinYourSecureDocSpace",
      links: [
        {
          id: "get-started-start-free-account",
          name: "StartWithYourFreeAccount",
          url: "/docspace-registration",
        },
      ],
    },
    {
      imgUrl: "/images/templates/main/get-started/connectors.svg",
      heading: "InThePlatformYouUse",
      text: {
        label: "ConnectDocsToEditDocuments",
        links: [
          {
            url: "/all-connectors",
          },
        ],
      },
      links: [
        {
          id: "get-started-all-connectors",
          name: "GetDocsNow",
          url: "/download#docs-enterprise",
        },
      ],
    },
    {
      imgUrl: "/images/templates/main/get-started/developers.svg",
      heading: "InThePlatformYouBuild",
      text: "IntegrateDocsIntoYourService",
      links: [
        {
          id: "get-started-learn-more",
          name: "LearnMore",
          url: "/developer-edition",
        },
      ],
    },
  ],
  largeItems: [
    {
      imgUrl: "/images/templates/main/get-started/from-pc.svg",
      heading: "FromYourPC",
      text: "EditDocsOfflineWithFreeOfficeApps",
      links: [
        {
          id: "get-started-download-now",
          name: "DownloadNow",
          url: "/download-desktop",
        },
      ],
    },
    {
      imgUrl: "/images/templates/main/get-started/from-mobile.svg",
      heading: "FromYourMobileDevices",
      text: "WorkOnDocumentsOnTheGoWithFreeApps",
      links: [
        {
          id: "get-started-install-now",
          name: "InstallNow",
          url: "/download-desktop#mobile",
        },
      ],
    },
  ],
};
