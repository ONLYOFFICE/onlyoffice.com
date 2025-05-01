import type { IEnvironmentItems } from "@src/components/templates/DocSpaceEnterprise/DocSpaceEnterprise.types";

export const items: IEnvironmentItems[] = [
  {
    heading: "EnvironmentItemTitleSecurity",
    text: "EnvironmentItemTextSecurity",
    image: {
      url: "/images/templates/docspace-enterprise/environment/environment-img_1.svg",
    },
    links: [
      {
        href: "/security",
        label: "EnvironmentItemLinkSecurity",
      },
    ],
  },
  {
    heading: "EnvironmentItemTitleAccessibility",
    text: "EnvironmentItemTextAccessibility",
    image: {
      url: "/images/templates/docspace-enterprise/environment/environment-img_2.svg",
    },
    links: [
      {
        href: "/accessibility",
        label: "EnvironmentItemLinkAccessibility",
      },
    ],
  },
  {
    heading: "EnvironmentItemTitleCustomization",
    text: "EnvironmentItemTextCustomization",
    image: {
      url: "/images/templates/docspace-enterprise/environment/environment-img_3.svg",
    },
  },
  {
    heading: "EnvironmentItemTitleAdministration",
    text: "EnvironmentItemTextAdministration",
    image: {
      url: "/images/templates/docspace-enterprise/environment/environment-img_4.svg",
    },
  },
  {
    heading: "EnvironmentItemTitleMultitenancy",
    text: "EnvironmentItemTextMultitenancy",
    image: {
      url: "/images/templates/docspace-enterprise/environment/environment-img_5.svg",
    },
  },
];
