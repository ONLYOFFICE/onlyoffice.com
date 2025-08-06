import { ISelectSubjectItems } from "../../../SupportContactForm.types";

const selectItems: ISelectSubjectItems[] = [
  {
    option: "Cloud Service",
    value: "Cloud Service",
    data: [
      { option: "Presale", value: "Presale"},
      { option: "Upgrade\\Refund", value: "Upgrade/Refund" },
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
    option: "Self-Hosted Server",
    value: "Self-Hosted Server",
    data: [
      {
        title: "Collaboration platform",
        value: "Collaboration platform",
        subData: [
          { option: "Installation\\Activation", value: "Collaboration platform: Installation/Activation" },
          { option: "Migration\\Updates", value: "Collaboration platform: Migration/Updates" },
          { option: "Other", value: "Collaboration platform: Other" }
        ]
      },
      {
        title: "Online Editors",
        value: "Online Editors",
        subData: [
          { option: "Installation\\Activation", value: "Online Editors: Installation/Activation" },
          { option: "Migration\\Updates", value: "Online Editors: Migration/Updates" },
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
      { option: "Desktop Apps", value: "Desktop Apps" },
      { option: "Mobile Apps", value: "Mobile Apps" },
    ]
  }
];

export { selectItems };