import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export const items: IFeatureImageItem[] = [
  {
    title: "SmoothAndIntuitiveOfficeExperience",
    text: "SmoothAndIntuitiveOfficeExperienceDesc",
    links: [
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
    title: "SuitedForAllOperatingSystems",
    text: "SuitedForAllOperatingSystemsDesc",
    image: {
      url: "SuitedForAllOperatingSystemsUrl",
      url2x: "SuitedForAllOperatingSystemsUrl2x",
      height: 470,
    },
  },
  {
    title: "FreeAndOpenSource",
    text: "FreeAndOpenSourceDesc",
    image: {
      url: "FreeAndOpenSourceUrl",
      url2x: "FreeAndOpenSourceUrl2x",
      height: 470,
    },
  },
  {
    title: "BothOfflineAndOnline",
    text: "BothOfflineAndOnlineDesc",
    links: [
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
    title: "DigitalLibraryAtHand",
    text: "DigitalLibraryAtHandDesc",
    links: [
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
