import { IFeatureItem } from "@src/components/widgets/FeatureItem";

interface IFeatureItemExtended extends IFeatureItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const items: IFeatureItemExtended[] = [
  {
    icon: {
      url: "/images/templates/office-for-students/features/its-free.svg",
    },
    heading: "ItSFree",
    text: "ItSFreeDesc",
  },
  {
    icon: {
      url: "/images/templates/office-for-students/features/collaboration.svg",
    },
    heading: "ItSCompatible",
    text: "ItSCompatibleDesc",
  },
  {
    icon: {
      url: "/images/templates/office-for-students/features/customizable.svg",
    },
    heading: "ItSHighlyCustomizable",
    text: "ItSHighlyCustomizableDesc",
    textLinks: [{ href: "/app-directory" }],
  },
  {
    icon: {
      url: "/images/templates/office-for-students/features/compatible.svg",
    },
    heading: "ItSBuilt",
    text: "ItSBuiltDesc",
  },
];
