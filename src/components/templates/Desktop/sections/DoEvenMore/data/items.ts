import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureImageItem[] = [
  {
    heading: "DoMore",
    text: "DoMoreDescription",
    contentWidth: 627,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    image: {
      url: getAssetUrl("/images/templates/desktop/features/do-even-more.svg"),
      height: 444,
      width: 460,
    },
  },
];