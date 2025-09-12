import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-confluence/features/features.svg"),
      positionX: "0",
    },
    text: "FeaturesFormats",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-confluence/features/features.svg"),
      positionX: "-80px",
    },
    text: "FeaturesAIHelper",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-confluence/features/features.svg"),
      positionX: "-160px",
    },
    text: "FeatureCoEditing",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-confluence/features/features.svg"),
      positionX: "-240px",
    },
    text: "FeaturesEnhancedSecurity",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-confluence/features/features.svg"),
      positionX: "-320px",
    },
    text: "FeaturesEasyConfiguration",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-confluence/features/features.svg"),
      positionX: "-400px",
    },
    text: "FeaturesFreeTrial",
  },
];
