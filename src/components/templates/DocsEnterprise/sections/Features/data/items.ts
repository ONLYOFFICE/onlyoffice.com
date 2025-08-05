import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export const items: IFeatureImageItem[] = [
  {
    heading: "FeatureTitle1",
    text: "FeatureText1",
    contentWidth: 544,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    image: {
      url: "/images/templates/docs-enterprise/features/flawless.svg",
      height: 290,
      width: 504,
    },
  },
  {
    heading: "FeatureTitle2",
    text: "FeatureText2",
    contentWidth: 544,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    links: [
      {
        href: "/security",
        label: "LearnMoreSecurity",
      },
    ],
    image: {
      url: "/images/templates/docs-enterprise/features/ultimate-security.svg",
      height: 346,
      width: 504,
    },
  },
  {
    heading: "FeatureTitle3",
    text: "FeatureText3",
    contentWidth: 544,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    links: [
      {
        href: "mailto:sales@onlyoffice.com?subject=ONLYOFFICE%20Docs%20Enterprise%20request",
        label: "ContactSales",
      },
    ],
    image: {
      url: "/images/templates/docs-enterprise/features/office-suite.svg",
      height: 290,
      width: 504,
    },
  },
  {
    heading: "FeatureTitle4",
    text: "FeatureText4",
    contentWidth: 544,
    gap: { desktop: 16, tablet: 16, tabletS: 16, mobile: 16 },
    marginTop: {
      desktop: 32,
      tablet: 32,
      tabletS: 0,
      mobile: 16,
    },
    links: [
      {
        href: "/download#docs-enterprise",
        label: "GetItButton",
      },
    ],
    image: {
      url: "/images/templates/docs-enterprise/features/high-availability.svg",
      height: 290,
      width: 504,
    },
  },
];
