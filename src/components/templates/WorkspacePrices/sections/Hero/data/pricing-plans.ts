export interface PricingPlanData {
  key: "basic" | "plus" | "premium";
  headingKey: string;
  price: string;
  availableKeys: string[];
  firstResponseTime: string;
  supportKeys: string[];
  casesKeys: string[];
}

export const pricingPlans: PricingPlanData[] = [
  {
    key: "basic",
    price: "2200",
    headingKey: "Enterprise",
    availableKeys: [
      "OODocsWithMobileWebEditors",
      "PrivateRooms",
      "PriorityAccess",
      "1YearOfUpdatesAndSupport",
      "BasicSupport",
    ],
    firstResponseTime: "48",
    supportKeys: ["Docs", "Groups", "Mail", "Talk"],
    casesKeys: [
      "StandardInstallation",
      "PrimaryConfiguration",
      "Migration",
      "UpdatesInstallation",
      "Consulting",
      "OOGroupsBranding",
    ],
  },
  {
    key: "plus",
    price: "3300",
    headingKey: "EnterprisePlus",
    availableKeys: [
      "OODocsWithMobileWebEditors",
      "PrivateRooms",
      "PriorityAccess",
      "1YearOfUpdatesAndSupport",
      "PlusSupport",
    ],
    firstResponseTime: "24",
    supportKeys: ["Docs", "Groups", "Mail", "Talk"],
    casesKeys: [
      "StandardInstallation",
      "PrimaryConfiguration",
      "Migration",
      "UpdatesInstallation",
      "Consulting",
      "OOGroupsBranding",
    ],
  },
  {
    key: "premium",
    price: "4450",
    headingKey: "EnterprisePremium",
    availableKeys: [
      "OODocsWithMobileWebEditors",
      "PrivateRooms",
      "PriorityAccess",
      "1YearOfUpdatesAndSupport",
      "PremiumSupport",
    ],
    firstResponseTime: "12",
    supportKeys: ["Docs", "Groups", "Mail", "Talk"],
    casesKeys: [
      "StandardInstallation",
      "PrimaryConfiguration",
      "Migration",
      "UpdatesInstallation",
      "Consulting",
      "OOGroupsBranding",
      "MonitoringSystem",
      "Clustering*",
    ],
  },
];
