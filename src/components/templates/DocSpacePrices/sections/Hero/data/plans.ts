import { ICounterSelector } from "@src/components/widgets/CounterSelector";
import { IToggleButtons } from "@src/components/widgets/ToggleButtons";
import { ITabs } from "@src/components/widgets/Tabs";

const businessCurrentPrice = "20";
const enterpriseCurrentPrice = "6550";

const numberOfUsers: ICounterSelector["items"] = [
  {
    id: "100",
    label: "100",
  },
  {
    id: "250",
    label: "250",
  },
  {
    id: "500",
    label: "500",
  },
  {
    id: "1000",
    label: "1000",
  },
  {
    id: "more",
    label: "More",
  },
];

const numberOfUsersTotal = {
  "100": enterpriseCurrentPrice,
  "250": 14100,
  "500": 28200,
  "1000": 56400,
};

const licenseDurations: IToggleButtons["items"] = [
  { id: "license-1-year", label: { name: "1Year" } },
  { id: "license-lifetime", label: { name: "Lifetime" } },
];

const supportUpdates: IToggleButtons["items"] = [
  { id: "support-1-year", label: { name: "1Year" } },
  { id: "support-3-years", label: { name: "3Years" } },
];

const supportLevel: ITabs["items"] = [
  {
    id: "support-level-standard",
    label: "Standard",
    content: [
      "FirstResponseTime48",
      "StandardInstallation",
      "PrimaryConfiguration",
      "Migration",
      "UpdatesInstallation",
      "IntegrationOfEditors",
      "Consulting",
    ],
  },
  {
    id: "support-level-plus",
    label: "Plus",
    content: [
      "FirstResponseTime24",
      "StandardInstallation",
      "PrimaryConfiguration",
      "Migration",
      "UpdatesInstallation",
      "IntegrationOfEditors",
      "Consulting",
    ],
  },
  {
    id: "support-level-premium",
    label: "Premium",
    content: [
      "FirstResponseTime12",
      "StandardInstallation",
      "PrimaryConfiguration",
      "Migration",
      "UpdatesInstallation",
      "IntegrationOfEditors",
      "Consulting",
      "Branding*",
      "MonitoringSystem",
      "Clustering**",
    ],
  },
];

export {
  businessCurrentPrice,
  enterpriseCurrentPrice,
  numberOfUsers,
  numberOfUsersTotal,
  licenseDurations,
  supportUpdates,
  supportLevel,
};
