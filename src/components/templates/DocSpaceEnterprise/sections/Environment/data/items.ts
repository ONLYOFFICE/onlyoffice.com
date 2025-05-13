import type { IEnvironmentItems } from "@src/components/templates/DocSpaceEnterprise/DocSpaceEnterprise.types";

export const items: IEnvironmentItems[] = [
  {
    heading: "EnvironmentItemTitleSecurity",
    text: "EnvironmentItemTextSecurity",
    image: {
      url: "EnvironmentItemImageSecurity",
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
      url: "EnvironmentItemImageAccessibility",
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
      url: "EnvironmentItemImageCustomization",
    },
  },
  {
    heading: "EnvironmentItemTitleAdministration",
    text: "EnvironmentItemTextAdministration",
    image: {
      url: "EnvironmentItemImageAdministration",
    },
  },
  {
    heading: "EnvironmentItemTitleMultitenancy",
    text: "EnvironmentItemTextMultitenancy",
    image: {
      url: "EnvironmentItemImageMultitenancy",
    },
  },
];
