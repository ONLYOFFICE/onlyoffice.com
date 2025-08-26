import { IFeature } from "../../Compliance/Compliance.types";

  export const items: IFeature[] = [
      {
        heading: "JWT",
        text: [
          "JSONWebToken",
          "ONLYOFFICEEditors",
        ],
      },
      {
        heading: "DocumentPermission",
        text: [
          "ONLYOFFICEEditorsWork"
        ],
      },
      {
        heading: "SpreadsheetProtection",
        text: [
          "ProtectAccess",
          "EncryptSpreadsheets",
          "ProtectWorkbookOrSeparateSheet",
          "AllowEditingForSpecific",
          "HideFormulas",
          "LockSpreadsheetElements",
        ],
        link: {
          href: "https://helpcenter.onlyoffice.com/onlyoffice-editors/onlyoffice-spreadsheet-editor/UsageInstructions/ProtectSpreadsheet.aspx",
          label: "ReadMoreAboutProtectingSpreadsheets",
          target: "_blank"
        }
      },
      {
        heading: "Watermarks",
        text: [
          "YouCanApplyWatermarks"
        ]
      },
      {
        heading: "HTTPS",
        text: [
          "ONLYOFFICEAllowsYouToEncrypt"
        ],
        link: {
          href: "https://helpcenter.onlyoffice.com/server/controlpanel/enterprise/switch-to-https.aspx",
          label: "ReadMoreAboutUsingHTTPS",
          target: "_blank"
        }
      },
      {
        heading: "DigitalSignatures",
        text: [
          "ApplyingDigitalSignatures"
        ]
      },
  ];