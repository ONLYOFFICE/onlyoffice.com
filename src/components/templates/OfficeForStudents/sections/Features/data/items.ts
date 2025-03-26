import { IFeatureItem } from "@src/components/widgets/FeatureItem";

export const items: IFeatureItem[] = [
  {
    icon: "/images/templates/office-for-students/features/its-free.svg",
    title: "ItSFree",
    text: "ItSFreeDesc",
  },
  {
    icon: "/images/templates/office-for-students/features/collaboration.svg",
    title: "ItSCompatible",
    text: "ItSCompatibleDesc",
  },
  {
    icon: "/images/templates/office-for-students/features/customizable.svg",
    title: "ItSHighlyCustomizable",
    text: "ItSHighlyCustomizableDesc",
    links: [{ href: "/app-directory" }],
  },
  {
    icon: "/images/templates/office-for-students/features/compatible.svg",
    title: "ItSBuilt",
    text: "ItSBuiltDesc",
  },
];
