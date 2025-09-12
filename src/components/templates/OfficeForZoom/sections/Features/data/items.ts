import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-zoom/features/features.svg"),
      positionY: "0px",
    },
    text: "Reason1",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-zoom/features/features.svg"),
      positionY: "-106px",
    },
    text: "Reason2",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-zoom/features/features.svg"),
      positionY: "-214px",
    },
    text: "Reason3",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-zoom/features/features.svg"),
      positionY: "-319px",
    },
    text: "Reason4",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/office-for-zoom/features/features.svg"),
      positionY: "-424px",
    },
    text: "Reason5",
  },
];
