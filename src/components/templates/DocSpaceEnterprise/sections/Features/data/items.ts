import type { IFeaturesItems } from "@src/components/templates/DocSpaceEnterprise/DocSpaceEnterprise.types";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeaturesItems[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/docspace-enterprise/features/feature_icon_1.svg"),
    },
    text: "FeaturesItemTextWork",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/docspace-enterprise/features/feature_icon_2.svg"),
    },
    text: "FeaturesItemTextInvite",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/docspace-enterprise/features/feature_icon_3.svg"),
    },
    text: "FeaturesItemTextCollect",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/docspace-enterprise/features/feature_icon_4.svg"),
    },
    text: "FeaturesItemTextCreate",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/docspace-enterprise/features/feature_icon_5.svg"),
    },
    text: "FeaturesItemTextShare",
  },
];
