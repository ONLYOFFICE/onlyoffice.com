import { IFeaturesItem } from "../../../About.types";

const items: IFeaturesItem[] = [
  {
    title: "FeaturesItemHeading1",
    text: "FeaturesItemText1",
    link: {
      label: "FeaturesItemLink1",
      href: "/office-suite?from=about"
    },
    image: "/images/templates/about/features/feature-img-1.svg"
  },
  {
    title: "FeaturesItemHeading2",
    text: "FeaturesItemText2",
    link: {
      label: "FeaturesItemLink2",
      href: "/workspace?from=about"
    },
    image: "/images/templates/about/features/feature-img-2.svg"
  },
  {
    title: "FeaturesItemHeading3",
    text: "FeaturesItemText3",
    link: {
      label: "FeaturesItemLink3",
      href: "/docspace?from=about"
    },
    image: "/images/templates/about/features/feature-img-3.svg"
  }
];

export { items };