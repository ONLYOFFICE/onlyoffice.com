import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
interface IFeatureItemExtended extends IFeatureItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const items: IFeatureItemExtended[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-educators/sprites/icons.svg"),
      positionX: "-172px",
    },
    heading: "ItProvidesFreeApps",
    text: "ItProvidesFreeAppsDesc",
    textLinks: [
      {
        href: "/desktop",
      },
      {
        href: "/office-for-ios",
      },
      {
        href: "/office-for-android",
      },
    ],
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-educators/sprites/icons.svg"),
      positionX: "-270px",
    },
    heading: "ItsAffordable",
    text: "ItsAffordableDesc",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-educators/sprites/icons.svg"),
      positionX: "-368px",
    },
    heading: "ItsHighlyCustomizable",
    text: "ItsHighlyCustomizableDesc",
    textLinks: [
      {
        href: "/app-directory",
      },
    ],
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-educators/sprites/icons.svg"),
      positionX: "-464px",
    },
    heading: "ItsFullyCompatible",
    text: "ItsFullyCompatibleDesc",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-educators/sprites/icons.svg"),
      positionX: "-560px",
    },
    heading: "YouWontFindABetterPlaceToCollaborate",
    text: "YouWontFindABetterPlaceToCollaborateDesc",
  },
];
