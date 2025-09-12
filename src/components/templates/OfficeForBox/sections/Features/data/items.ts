import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-box/features/working.svg"),
    },
    text: "FeaturesWorking",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-box/features/formats.svg"),
    },
    text: "FeaturesFormats",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-box/features/ai-helper.svg"),
    },
    text: "FeaturesAIHelper",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-box/features/co-editing.svg"),
    },
    text: "FeaturesWorkingCoEditing",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-box/features/free-app.svg"),
    },
    text: "FeaturesFreeApp",
  },
];
