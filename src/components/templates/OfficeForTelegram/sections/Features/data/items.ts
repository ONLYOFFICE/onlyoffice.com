import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-telegram/features/features.svg"),
      positionX: "0px",
    },
    text: "FeaturesAIHelper",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-telegram/features/features.svg"),
      positionX: "-65px",
    },
    text: "FeaturesCoEditing",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-telegram/features/features.svg"),
      positionX: "-131px",
    },
    text: "FeaturesFormats",
  },
];
