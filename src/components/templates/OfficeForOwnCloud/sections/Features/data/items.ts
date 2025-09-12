import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-owncloud/features/formats.svg"),
    },
    text: "FeaturesFormats",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-owncloud/features/co-editing.svg"),
    },
    text: "FeaturesCoEditing",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-owncloud/features/ai-helper.svg"),
    },
    text: "FeaturesAIHelper",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-owncloud/features/security.svg"),
    },
    text: "FeaturesSecurity",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-owncloud/features/configuration.svg"),
    },
    text: "FeaturesConfiguration",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-owncloud/features/free.svg"),
    },
    text: "FeaturesFree",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-owncloud/features/permission.svg"),
    },
    text: "FeaturesPermissions",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-owncloud/features/customization.svg"),
    },
    text: "FeaturesCustomization",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-owncloud/features/support.svg"),
    },
    text: "FeaturesSupport",
  },
];
