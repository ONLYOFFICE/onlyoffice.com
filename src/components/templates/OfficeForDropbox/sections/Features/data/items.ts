import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-dropbox/features/robust-set.svg"),
    },
    text: "FeaturesRobustSet",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-dropbox/features/familiar-interface.svg"),
    },
    text: "FeaturesFamiliarInterface",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-dropbox/features/ai-helper.svg"),
    },
    text: "FeaturesAIHelper",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-dropbox/features/formats.svg"),
    },
    text: "FeaturesFormats",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-dropbox/features/highest-compatibility.svg"),
    },
    text: "FeaturesHighestCompatibility",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-dropbox/features/open-source-code.svg"),
    },
    text: "FeaturesOpenSourceCode",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-dropbox/features/free-app.svg"),
    },
    text: "FeaturesFreeApp",
  },
];
