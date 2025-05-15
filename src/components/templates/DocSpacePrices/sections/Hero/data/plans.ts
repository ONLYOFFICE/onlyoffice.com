import { IToggleButtons } from "@src/components/widgets/ToggleButtons";
import { ICounterSelector } from "@src/components/widgets/CounterSelector";
import { ITabs } from "@src/components/widgets/Tabs";
import { IEnterpriseModalFormData } from "../sub-components/EnterpriseModal";

export const numberOfUsers: ICounterSelector<
  IEnterpriseModalFormData["usersNumber"]
>["items"] = [
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

export const licenseDuration: IToggleButtons<
  IEnterpriseModalFormData["licenseDuration"]
>["items"] = [
  { id: "1 Year", label: { name: "1Year" } },
  { id: "Lifetime", label: { name: "Lifetime" } },
];

export const supportUpdates: IToggleButtons<
  IEnterpriseModalFormData["supportAndUpdates"]
>["items"] = [
  { id: "1 Year", label: { name: "1Year" } },
  { id: "3 Years", label: { name: "3Years" } },
];

export const supportLevel: ITabs<
  IEnterpriseModalFormData["supportLevel"]
>["items"] = [
  {
    id: "Standard",
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
    id: "Plus",
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
    id: "Premium",
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
