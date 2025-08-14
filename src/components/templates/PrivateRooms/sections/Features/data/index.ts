import { IFeatureItem } from "@src/components/widgets/FeatureItem";

interface IFeatureItemExtended extends IFeatureItem {
  textLinks?: { href: string; isExternal?: boolean }[];
}

export const items: IFeatureItemExtended[] = [
  {
    icon: {
      url: "/images/templates/private-rooms/features/work-icons.svg",
    },
    heading: "UnbreakableDocumentEncryption",
    text: "ONLYOFFICEUsesTheAES",
  },
  {
    icon: {
      url: "/images/templates/private-rooms/features/work-icons.svg",
    },
    heading: "EncryptedRealTime",
    text: "ONLYOFFICEEncryptsTheData",
  },
  {
    icon: {
      url: "/images/templates/private-rooms/features/work-icons.svg",
    },
    heading: "NoManualActions",
    text: "YouDontNeedToInvent",
    textLinks: [{ href: "/app-directory" }],
  },
  {
    icon: {
      url: "/images/templates/private-rooms/features/work-icons.svg",
    },
    heading: "EntirelyPrivateStorage",
    text: "EveryBitOfInformation",
  },
];