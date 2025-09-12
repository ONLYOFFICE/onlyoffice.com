import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-nextcloud/features/formats.svg"),
    },
    text: "FeaturesFormats",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-nextcloud/features/ai-helper.svg"),
    },
    text: "FeaturesAIHelper",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-nextcloud/features/co-editing.svg"),
    },
    text: "FeaturesCoEditing",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-nextcloud/features/support.svg"),
    },
    text: "FeaturesSupport",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-nextcloud/features/security.svg"),
    },
    text: "FeaturesSecurity",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-nextcloud/features/configuration.svg"),
    },
    text: "FeaturesConfiguration",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-nextcloud/features/free.svg"),
    },
    text: "FeaturesFree",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-nextcloud/features/integration.svg"),
    },
    text: "FeaturesIntegration",
  },
];
