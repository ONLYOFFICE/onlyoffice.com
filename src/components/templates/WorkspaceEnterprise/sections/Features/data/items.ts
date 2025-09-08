import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export const items: IFeatureImageItem[] = [
  {
    heading: "Feature1",
    text: "Feature1Text",
    contentWidth: 448,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    image: {
      url: "/images/templates/workspace-enterprise/features/administration-customization.svg",
      height: 290,
      width: 449,
    },
  },
  {
    heading: "Feature2",
    text: "Feature2Text",
    contentWidth: 448,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    image: {
      url: "/images/templates/workspace-enterprise/features/multitenancy-scalability.svg",
      height: 290,
      width: 449,
    },
  },
];
