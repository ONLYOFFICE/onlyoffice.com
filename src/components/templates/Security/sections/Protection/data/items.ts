  import { IFeatureLinkItem } from "@src/components/widgets/FeatureLinkItem";

  export const items: IFeatureLinkItem[] = [
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "-463px",
          mobilePositionX: "-347px",
        },
        heading: "JWT",
        textList: [
          "JSONWebToken",
          "ONLYOFFICEEditors",
        ],
        linkText: "",
      },
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "-690px",
          mobilePositionX: "-518px",
        },
        heading: "DocumentPermission",
        textList: [
          "ONLYOFFICEEditorsWork", 
        ],
        linkText: "",
      },
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "-888px",
          mobilePositionX: "-666px",
        },
        heading: "SpreadsheetProtection",
        textList: [
          "ProtectAccess"
        ],
        items: [
          { label: "EncryptSpreadsheets" },
          { label: "ProtectWorkbookOrSeparateSheet" },
          { label: "AllowEditingForSpecific" },
          { label: "HideFormulas" },
          { label: "LockSpreadsheetElements" },
        ],
        linkText: "ReadMoreAboutProtectingSpreadsheets",
        linkUrl: "https://helpcenter.onlyoffice.com/onlyoffice-editors/onlyoffice-spreadsheet-editor/UsageInstructions/ProtectSpreadsheet.aspx",
        target: "_blank"
      },
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "-992px",
          mobilePositionX: "-744px",
        },
        heading: "Watermarks",
        textList: [
          "YouCanApplyWatermarks"
        ],
        linkText: "",
      },
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "-581px",
          mobilePositionX: "-436px",
        },
        heading: "HTTPS",
        textList: [
          "ONLYOFFICEAllowsYouToEncrypt"
        ],
        linkText: "ReadMoreAboutUsingHTTPS",
        linkUrl: "https://helpcenter.onlyoffice.com/server/controlpanel/enterprise/switch-to-https.aspx",
        target: "_blank"
      },
      {
        icon: {
          url: "/images/templates/security/compliance/sec_icons.svg",
          positionX: "-1085px",
          mobilePositionX: "-815px",
        },
        heading: "DigitalSignatures",
        textList: [
          "ApplyingDigitalSignatures"
        ],
        linkText: "",
      },
  ];