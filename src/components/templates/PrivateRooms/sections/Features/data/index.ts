import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/private-rooms/features/work-icons.svg"),
    },
    heading: "UnbreakableDocumentEncryption",
    text: "ONLYOFFICEUsesTheAES",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/private-rooms/features/work-icons.svg"),
    },
    heading: "EncryptedRealTime",
    text: "ONLYOFFICEEncryptsTheData",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/private-rooms/features/work-icons.svg"),
    },
    heading: "NoManualActions",
    text: "YouDontNeedToInvent",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/private-rooms/features/work-icons.svg"),
    },
    heading: "EntirelyPrivateStorage",
    text: "EveryBitOfInformation",
  },
];
