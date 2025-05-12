import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "DoesONLYOFFICEHaveAccess",
    children: "NoSuchInformation",
  },
  {
    label: "IsThereAServer_SideData",
    children: "YouCanEnableEncryption",
  },
  {
    label: "WhatContentProtection",
    children: "YouCanEncryptDocument",
  },
  {
    label: "WhatUserRolesDoesONLYOFFICE",
    children: "ThereAreFollowingTypes",
  },
  {
    label: "AreThereAuditFeatures",
    children: "ThereIsAnAuditTrail",
  },
  {
    label: "IsThereAutomaticBackup",
    children: "ThereAreAutomaticBackup",
  },
  {
    label: "DoesONLYOFFICEDocsInstance",
    children: "ONLYOFFICEDocsProcessesDocument",
  },
  {
    label: "WhatSecurityFeatures",
    children: "ONLYOFFICEWorkspaceCollaborationPlatform",
  },
  {
    label: "HowDoesTheOnlyOfficeAuthenticate",
    children: "ONLYOFFICEAuthenticatesPOST",
    links: [{ href: "https://api.onlyoffice.com/workspace/api-backend/get-started/passing-authentication/", isExternal: true }],
  },
];
