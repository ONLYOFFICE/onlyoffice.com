import { ISelectSubjectItems } from "../../../SupportContactForm.types";

const selectItems: ISelectSubjectItems[] = [
  {
    option: "Cloud Service",
    value: "Cloud Service",
    data: [
      { option: "Presale", value: "presale"},
      { option: "Upgrade\\Refund", value: "Upgrade\\Refund" },
      {
        title: "Functionality",
        value: "Functionality",
        subData: [
          { option: "Documents", value: "Documents" },
          { option: "CRM", value: "CRM" },
          { option: "Projects", value: "Projects", },
          { option: "Other", value: "Other" },
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
          { option: "Installation\\Activation", value: "Installation\\Activation" },
          { option: "Migration\\Updates", value: "Migration\\Updates" },
          { option: "Other", value: "Other" }
        ]
      },
      {
        title: "Online Editors",
        value: "Online Editors",
        subData: [
          { option: "Installation\\Activation", value: "Installation\\Activation" },
          { option: "Migration\\Updates", value: "Migration\\Updates" },
          { option: "Connectors", value: "Connectors" },
          { option: "API", value: "API" },
          { option: "Plugins", value: "Plugins" },
          { option: "Other", value: "Other" },
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