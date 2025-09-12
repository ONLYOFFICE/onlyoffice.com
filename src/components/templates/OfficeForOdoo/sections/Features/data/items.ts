import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-odoo/features/features.svg"),
      positionX: "0",
    },
    text: "FeaturesAIHelper",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-odoo/features/features.svg"),
      positionX: "-160px",
    },
    text: "FeaturesCollaboration",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-odoo/features/features.svg"),
      positionX: "-320px",
    },
    text: "FeaturesFormats",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-odoo/features/features.svg"),
      positionX: "-80px",
    },
    text: "FeaturesOpenSourceCode",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-odoo/features/features.svg"),
      positionX: "-240px",
    },
    text: "FeaturesFreeTrial",
  },
];
