import { ICounterSelector } from "@src/components/widgets/CounterSelector";
import { IToggleButtons } from "@src/components/widgets/ToggleButtons";
import { ITabs } from "@src/components/widgets/Tabs";

export const numberOfUsers: ICounterSelector["items"] = [
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

export const licenseDurations: IToggleButtons["items"] = [
  { id: "license-1-year", label: "1Year" },
  { id: "license-lifetime", label: "Lifetime" },
];

export const supportUpdates: IToggleButtons["items"] = [
  { id: "support-1-year", label: "1Year" },
  { id: "support-3-years", label: "3Years" },
];

export const supportLevel: ITabs["items"] = [
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
