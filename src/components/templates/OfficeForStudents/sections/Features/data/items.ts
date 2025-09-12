import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
interface IFeatureItemExtended extends IFeatureItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const items: IFeatureItemExtended[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-students/features/its-free.svg"),
    },
    heading: "ItSFree",
    text: "ItSFreeDesc",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-students/features/collaboration.svg"),
    },
    heading: "ItSCompatible",
    text: "ItSCompatibleDesc",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-students/features/customizable.svg"),
    },
    heading: "ItSHighlyCustomizable",
    text: "ItSHighlyCustomizableDesc",
    textLinks: [{ href: "/app-directory" }],
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-students/features/compatible.svg"),
    },
    heading: "ItSBuilt",
    text: "ItSBuiltDesc",
  },
];
