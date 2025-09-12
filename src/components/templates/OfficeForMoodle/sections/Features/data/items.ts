import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-moodle/features/features.svg"),
      positionX: "0",
    },
    text: "FeaturesAIHelper",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-moodle/features/features.svg"),
      positionX: "-76px",
    },
    text: "FeaturesCoEditing",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-moodle/features/features.svg"),
      positionX: "-152px",
    },
    text: "FeaturesFormats",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-moodle/features/features.svg"),
      positionX: "-230px",
    },
    text: "FeaturesDesktopEditors",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-moodle/features/features.svg"),
      positionX: "-306px",
    },
    text: "FeaturesOpenSourceCode",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-moodle/features/features.svg"),
      positionX: "-380px",
    },
    text: "FeaturesFreeTrial",
  },
];
