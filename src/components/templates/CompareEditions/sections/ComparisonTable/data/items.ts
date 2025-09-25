export interface IDocsEditions {
  type: "section" | "cta" | "feature";
  label?: string;
  link?: string;
  info?: string;
  isExternal?: boolean;
  values?: {
    [key: string]: {
      type: "button" | "link" | "text" | "bullet";
      value: string;
      href?: string;
      info?: string;
      isExternal?: boolean;
    };
  };
}

export const editions: string[] = ["Community", "Enterprise", "Developer"];

export const tableRows: IDocsEditions[] = [
  {
    type: "section",
    label: "PricingAndLicensing",
  },
  {
    type: "cta",
    values: {
      community: {
        type: "button",
        value: "GetItNow",
        href: "download-community#docs-community",
      },
      enterprise: {
        type: "button",
        value: "StartFreeTrial",
        href: "/download?from=compare-editions#docs-enterprise",
      },
      developer: {
        type: "button",
        value: "StartFreeTrial",
        href: "/download-developer?from=compare-editions#docs-developer",
      },
    },
  },
  {
    type: "feature",
    label: "Cost",
    values: {
      community: {
        type: "text",
        value: "FREE",
      },
      enterprise: {
        type: "link",
        value: "GoToThePricingPage",
        href: "/docs-enterprise-prices?from=compare-editions",
      },
      developer: {
        type: "link",
        value: "GoToThePricingPage",
        href: "/developer-edition-prices?from=compare-editions",
      },
    },
  },
  {
    type: "feature",
    label: "SimultaneousConnections",
    info: "SimultaneouslyConnectionsInfo",
    values: {
      community: {
        type: "text",
        value: "UpTo20",
      },
      enterprise: {
        type: "text",
        value: "AsInChosenPrisingPlan",
      },
      developer: {
        type: "text",
        value: "AsInChosenPrisingPlan",
      },
    },
  },
  {
    type: "feature",
    label: "NumberOfUsers",
    values: {
      community: {
        type: "text",
        value: "UpTo20Recommended",
      },
      enterprise: {
        type: "text",
        value: "AsInChosenPrisingPlan",
      },
      developer: {
        type: "text",
        value: "AsInChosenPrisingPlan",
      },
    },
  },
  {
    type: "feature",
    label: "License",
    values: {
      community: {
        type: "text",
        value: "GNUAGPLv3",
      },
      enterprise: {
        type: "link",
        value: "Commercial",
        href: "https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=4995927&doc=bTNVWUNPTm1yMzBlRW9Eb3o1MityMWJRNGlzcTFCZFlxdFRLbEFLdmVOcz0_IjQ5OTU5Mjci0",
        isExternal: true,
      },
      developer: {
        type: "link",
        value: "Commercial",
        href: "https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5522566&doc=RVVQOEgvM2pOK0QvNzJ0Q25xSzRlVGZRUHdvYmgxUzIwNFRUUFhxbFpNWT0_IjU1MjI1NjYi0",
        isExternal: true,
      },
    },
  },
  {
    type: "section",
    label: "Support",
  },
  {
    type: "feature",
    label: "Documentation",
    values: {
      community: {
        type: "link",
        value: "HelpCenter",
        href: "DocumentationCommunityLink",
        isExternal: true,
      },
      enterprise: {
        type: "link",
        value: "HelpCenter",
        href: "DocumentationEnterpriseLink",
        isExternal: true,
      },
      developer: {
        type: "link",
        value: "HelpCenter",
        href: "DocumentationDeveloperLink",
        isExternal: true,
      },
    },
  },
  {
    type: "feature",
    label: "Support",
    values: {
      community: {
        type: "text",
        value: "GitHubOrForum",
      },
      enterprise: {
        type: "text",
        value: "BasicPlusPremium",
        info: "DependingOnTheChosenOption",
      },
      developer: {
        type: "text",
        value: "BasicPlusPremium",
        info: "DependingOnTheChosenOption",
      },
    },
  },
  {
    type: "feature",
    label: "Webinars",
    values: {
      community: {
        type: "link",
        value: "RegularFreeWebinars",
        href: "/webinars",
      },
      enterprise: {
        type: "link",
        value: "RegularFreeWebinars",
        href: "/webinars",
      },
      developer: {
        type: "link",
        value: "RegularFreeWebinars",
        href: "/webinars",
      },
    },
  },
  {
    type: "section",
    label: "Services",
  },
  {
    type: "feature",
    label: "ConversionService",
    link: "/conversion-api",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "DocumentBuilderService",
    link: "/document-builder",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "section",
    label: "Security",
  },
  {
    type: "feature",
    label: "HTTPS",
    info: "HttpsInfo",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "JWT",
    info: "JwtInfo",
    link: "JwtLink",
    isExternal: true,
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "CacheLifetime",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "PrivateRooms",
    info: "PrivateRoomsInfo",
    link: "/private-rooms",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "no",
      },
    },
  },
  {
    type: "section",
    label: "Interface",
  },
  {
    type: "feature",
    label: "TabbedInterface",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "WhiteLabel",
    link: "#white-label-note",
    values: {
      community: {
        type: "bullet",
        value: "no",
      },
      enterprise: {
        type: "bullet",
        value: "no",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "TestExample",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "MobileWebEditors",
    values: {
      community: {
        type: "bullet",
        value: "no",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "section",
    label: "Plugins&Macros",
  },
  {
    type: "feature",
    label: "Plugins",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "Macros",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "section",
    label: "CollaborativeCapabilities",
  },
  {
    type: "feature",
    label: "TwoCoEditingModes",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "Comments",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "BuiltInChat",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "ReviewAndTrackingChanges",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "VersionHistory",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "DisplayModesOfTrackingChanges",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "DocumentComparison",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "DocumentCombining",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "section",
    label: "DocumentEditorFeatures",
    link: "/document-editor",
  },
  {
    type: "feature",
    label: "FontAndParagraph",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "ObjectInsertion",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "LayoutTools",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "TableOfContents",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "MailMerge",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "AddingContentControls",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "section",
    label: "FormCreatorFeatures",
    link: "/form-creator",
  },
  {
    type: "feature",
    label: "AddingFormFields",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "FormPreview",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "SavingAsPdf",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "section",
    label: "PdfEditorFeatures",
    link: "/pdf-editor",
  },
  {
    type: "feature",
    label: "FillablePdfForms",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "TextAnnotations",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "Comments",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "FreehandDrawings",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "section",
    label: "SpreadsheetEditorFeatures",
    link: "/spreadsheet-editor",
  },
  {
    type: "feature",
    label: "FontAndParagraph",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "ObjectInsertion",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "Functions",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "NamedRanges",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "FilteringSorting",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "TableTemplates",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "PivotTables",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "ConditionalFormatting",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "Sparklines",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "SheetViews",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "section",
    label: "PresentationEditorFeatures",
    link: "/presentation-editor",
  },
  {
    type: "feature",
    label: "FontAndParagraph",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "ObjectInsertion",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "AnimationsTransitions",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "Notes",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "feature",
    label: "PresenterMode",
    values: {
      community: {
        type: "bullet",
        value: "yes",
      },
      enterprise: {
        type: "bullet",
        value: "yes",
      },
      developer: {
        type: "bullet",
        value: "yes",
      },
    },
  },
  {
    type: "cta",
    values: {
      community: {
        type: "button",
        value: "GetItNow",
        href: "download-community#docs-community",
      },
      enterprise: {
        type: "button",
        value: "StartFreeTrial",
        href: "/download?from=compare-editions#docs-enterprise",
      },
      developer: {
        type: "button",
        value: "StartFreeTrial",
        href: "/download-developer?from=compare-editions#docs-developer",
      },
    },
  },
];
