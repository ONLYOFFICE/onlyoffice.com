export interface PricingPlanData {
  key: "basic" | "plus" | "premium";
  headingKey: string;
  availableKeys: string[];
  firstResponseTime: string;
  supportKeys: string[];
  casesKeys: string[];
}

export const pricingPlans: PricingPlanData[] = [
  {
    key: "basic",
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
