import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export const items: IFeatureImageItem[] = [
  {
    title: "SmoothAndIntuitiveOfficeExperience",
    text: {
      label: "SmoothAndIntuitiveOfficeExperienceDesc",
      links: [
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
    },
    image: {
      url: "SmoothAndIntuitiveOfficeExperienceUrl",
      url2x: "SmoothAndIntuitiveOfficeExperienceUrl2x",
      height: 500,
    },
  },
  {
    title: "SuitedForAllOperatingSystems",
    text: { label: "SuitedForAllOperatingSystemsDesc" },
    image: {
      url: "SuitedForAllOperatingSystemsUrl",
      url2x: "SuitedForAllOperatingSystemsUrl2x",
      height: 470,
    },
  },
  {
    title: "FreeAndOpenSource",
    text: { label: "FreeAndOpenSourceDesc" },
    image: {
      url: "FreeAndOpenSourceUrl",
      url2x: "FreeAndOpenSourceUrl2x",
      height: 470,
    },
  },
  {
    title: "BothOfflineAndOnline",
    text: {
      label: "BothOfflineAndOnlineDesc",
      links: [
        {
          href: "/office-for-ios",
        },
        {
          href: "/office-for-android",
        },
      ],
    },

    image: {
      url: "BothOfflineAndOnlineUrl",
      url2x: "BothOfflineAndOnlineUrl2x",
      height: 494,
    },
  },
  {
    title: "DigitalLibraryAtHand",
    text: {
      label: "DigitalLibraryAtHandDesc",
      links: [
        {
          href: "/e-book",
        },
      ],
    },
    image: {
      url: "DigitalLibraryAtHandUrl",
      url2x: "DigitalLibraryAtHandUrl2x",
      height: 494,
    },
  },
];
