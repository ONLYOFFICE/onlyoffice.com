import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "HowCanOOHelp",
    children: "HowCanOOHelpAnswer",
  },
  {
    label: "CanIUseOOForGroup",
    children: "CanIUseOOForGroupAnswer",
  },
  {
    label: "DoesOOOfferTemplatesForAcademicDocuments",
    children: "DoesOOOfferTemplatesForAcademicDocumentsAnswer",
    links: [{ href: "https://templates.onlyoffice.com", isExternal: true }],
  },
  {
    label: "IsOOSecure",
    children: "IsOOSecureAnswer",
    links: [{ href: "/security" }],
  },
  {
    label: "IsOOFree",
    children: "IsOOFreeAnswer",
  },
  {
    label: "AreThereAnyIntegrations",
    children: "AreThereAnyIntegrationsAnswer",
    links: [
      { href: "/office-suite" },
      { href: "/all-connectors" },
      { href: "/office-for-moodle" },
    ],
  },
  {
    label: "WhatIfINeedToEditDocs",
    children: "WhatIfINeedToEditDocsAnswer",
    links: [{ href: "/office-for-box" }, { href: "/office-for-dropbox" }],
  },
];
