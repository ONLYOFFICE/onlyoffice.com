import { IDocSpaceCard } from "@src/components/modules/docspace/DocSpaceCards/DocSpaceCards.types";

export const budgetItems: IDocSpaceCard[] = [
  {
    heading: "Business",
    text: "BusinessDesc",
    image: {
      url: "/images/templates/docspace/budgets/business-icon.svg",
    },
    linkLabel: "BusinessLinkLabel",
    linkHref: "/docspace-prices#docspace-cloud",
  },
  {
    heading: "Enterprise",
    text: "EnterpriseDesc",
    image: {
      url: "/images/templates/docspace/budgets/enterprise-icon.svg",
    },
    color: "white",
    borderColor: "transparent",
    bgColor: "linear-gradient(136.1deg, #FF8E3D -1.99%, #FF6F3D 100%)",
    linkLabel: "EnterpriseLinkLabel",
    linkHref: "/download#docspace-enterprise",
  },
  {
    heading: "Startup",
    text: "StartupDesc",
    image: {
      url: "/images/templates/docspace/budgets/startup-icon.svg",
    },
    borderColor: "#8bb825",
    bgColor: "#f9feef",
    linkLabel: "StartupLinkLabel",
    linkHref: "/docspace-registration",
  },
  {
    heading: "NonProfit",
    text: "NonProfitDesc",
    image: {
      url: "/images/templates/docspace/budgets/non-profit-icon.svg",
    },
    linkLabel: "NonProfitLinkLabel",
    linkHref:
      "mailto:press@onlyoffice.com?subject=Free%20DocSpace%20for%20schools%20and%20non-profits",
  },
];
