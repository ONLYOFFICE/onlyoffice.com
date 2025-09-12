import { CardsProps } from "../sections/Cards/Cards";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: CardsProps[] = [
  {
    title: "ForTeamsOfAnySize",
    bg: "#f5f5f5",
    items: [
      {
        title: "Individual",
        link: "/home-use",
        icon: getAssetUrl("/images/templates/solutions/teams/home-use.svg"),
      },
      {
        title: "SMBs",
        link: "/for-small-business",
        icon: getAssetUrl("/images/templates/solutions/teams/smbs.svg"),
      },
      {
        title: "Enterprises",
        link: "/for-enterprises",
        icon: getAssetUrl("/images/templates/solutions/teams/enterprise.svg"),
      },
    ],
  },
  {
    title: "MakingProfit",
    bg: "#f9f9f9",
    items: [
      {
        title: "Resellers",
        link: "/resellers",
        icon: getAssetUrl("/images/templates/solutions/profit/resellers.svg"),
        width: 150,
        height: 150,
      },
      {
        title: "TechnologyPartners",
        link: "/technology-partners",
        icon: getAssetUrl("/images/templates/solutions/profit/partners.svg"),
        width: 150,
        height: 150,
      },
      {
        title: "Affiliates",
        link: "/affiliates",
        icon: getAssetUrl("/images/templates/solutions/profit/affiliates.svg"),
        width: 150,
        height: 150,
      },
    ],
  },
];
