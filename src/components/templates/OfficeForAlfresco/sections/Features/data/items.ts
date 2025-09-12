import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-alfresco/features/features.svg"),
      positionX: "-20px",
    },
    text: "FeaturesFormats",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-alfresco/features/features.svg"),
      positionX: "-108px",
    },
    text: "FeaturesCoEditing",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-alfresco/features/features.svg"),
      positionX: "-196px",
    },
    text: "FeaturesFree",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-alfresco/features/features.svg"),
      positionX: "-284px",
    },
    text: "FeaturesSecurity",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-alfresco/features/features.svg"),
      positionX: "-372px",
    },
    text: "FeaturesConfiguration",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-alfresco/features/features.svg"),
      positionX: "-460px",
    },
    text: "FeaturesAIHelper",
  },
];
