import { ISelectSubjectItems } from "../../../SupportContactForm.types";

const selectItems: ISelectSubjectItems[] = [
  {
    option: "CloudService",
    value: "Cloud Service",
    data: [
      { option: "Presale", value: "Presale"},
      { option: "UpgradeRefund", value: "Upgrade/Refund" },
      {
        title: "Functionality",
        value: "Functionality",
        subData: [
          { option: "Documents", value: "Documents" },
          { option: "CRM", value: "CRM" },
          { option: "Projects", value: "Projects", },
          { option: "Other", value: "Functionality: Other" },
        ]
      },
      { option: "GDPR", value: "GDPR" },
      { option: "Other", value: "Other" },
    ]
  },
  {
    option: "SelfHostedServer",
    value: "Self-Hosted Server",
    data: [
      {
        title: "CollaborationPlatform",
        value: "Collaboration platform",
        subData: [
          { option: "InstallationActivation", value: "Collaboration platform: Installation/Activation" },
          { option: "MigrationUpdates", value: "Collaboration platform: Migration/Updates" },
          { option: "Other", value: "Collaboration platform: Other" }
        ]
      },
      {
        title: "OnlineEditors",
        value: "Online Editors",
        subData: [
          { option: "InstallationActivation", value: "Online Editors: Installation/Activation" },
          { option: "MigrationUpdates", value: "Online Editors: Migration/Updates" },
          { option: "Connectors", value: "Connectors" },
          { option: "API", value: "API" },
          { option: "Plugins", value: "Plugins" },
          { option: "Other", value: "Online Editors: Other" },
        ]
      },
    ]
  },
  {
    option: "Applications",
    value: "Applications",
    data: [
      { option: "DesktopApps", value: "Desktop Apps" },
      { option: "MobileApps", value: "Mobile Apps" },
    ]
  }
];

export { selectItems };