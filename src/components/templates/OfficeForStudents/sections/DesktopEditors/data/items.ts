import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

interface IFeatureImageItemExtended extends IFeatureImageItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const items: IFeatureImageItemExtended[] = [
  {
    heading: "SmoothAndIntuitiveOfficeExperience",
    text: "SmoothAndIntuitiveOfficeExperienceDesc",
    textLinks: [
      {
        href: "/document-editor",
        isExternal: false,
      },
      {
        href: "/spreadsheet-editor",
        isExternal: false,
      },
      {
        href: "/presentation-editor",
        isExternal: false,
      },
      {
        href: "/pdf-editor",
        isExternal: false,
      },
    ],
    image: {
      url: "SmoothAndIntuitiveOfficeExperienceUrl",
      url2x: "SmoothAndIntuitiveOfficeExperienceUrl2x",
      height: 500,
    },
  },
  {
    heading: "SuitedForAllOperatingSystems",
    text: "SuitedForAllOperatingSystemsDesc",
    image: {
      url: "SuitedForAllOperatingSystemsUrl",
      url2x: "SuitedForAllOperatingSystemsUrl2x",
      height: 470,
    },
  },
  {
    heading: "FreeAndOpenSource",
    text: "FreeAndOpenSourceDesc",
    image: {
      url: "FreeAndOpenSourceUrl",
      url2x: "FreeAndOpenSourceUrl2x",
      height: 470,
    },
  },
  {
    heading: "BothOfflineAndOnline",
    text: "BothOfflineAndOnlineDesc",
    textLinks: [
      {
        href: "/office-for-ios",
        isExternal: false,
      },
      {
        href: "/office-for-android",
        isExternal: false,
      },
    ],
    image: {
      url: "BothOfflineAndOnlineUrl",
      url2x: "BothOfflineAndOnlineUrl2x",
      height: 494,
    },
  },
  {
    heading: "DigitalLibraryAtHand",
    text: "DigitalLibraryAtHandDesc",
    textLinks: [
      {
        href: "/e-book",
        isExternal: false,
      },
    ],
    image: {
      url: "DigitalLibraryAtHandUrl",
      url2x: "DigitalLibraryAtHandUrl2x",
      height: 494,
    },
  },
];
