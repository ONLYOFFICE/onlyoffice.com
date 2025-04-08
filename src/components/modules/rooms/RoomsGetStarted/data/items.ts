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
      imgUrl: "/images/modules/rooms/rooms-get-started/docspace.svg",
      heading: "OnPremisesOrInTheCloud",
      text: "CreateRoomsWithinYourSecureDocSpace",
      links: [
        {
          id: "start-with-your-free-cloud-account",
          name: "StartWithYourFreeCloudAccount",
          url: "/docspace-registration",
        },
        {
          id: "deploy-on-your-own-server",
          name: "DeployOnYourOwnServer",
          url: "/download#docspace-enterprise",
        },
      ],
    },
    {
      imgUrl: "/images/modules/rooms/rooms-get-started/connectors.svg",
      heading: "InThePlatformYouUse",
      text: "ConnectDocSpaceToCollaborateOnOfficeDocuments",
      links: [
        {
          id: "get-started-all-connectors",
          name: "DiscoverAllIntegrations",
          url: "/all-connectors",
        },
      ],
    },
    {
      imgUrl: "/images/modules/rooms/rooms-get-started/collaboration.svg",
      heading: "InThePlatformYouBuild",
      text: "EmbedRoomsOrTheWholeDocSpace",
      links: [
        {
          id: "get-started-learn-more",
          name: "LearnMore",
          url: "/docspace-developer",
        },
      ],
    },
  ],
  largeItems: [
    {
      imgUrl: "/images/modules/rooms/rooms-get-started/from-pc.svg",
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
      imgUrl: "/images/modules/rooms/rooms-get-started/from-mobile.svg",
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
