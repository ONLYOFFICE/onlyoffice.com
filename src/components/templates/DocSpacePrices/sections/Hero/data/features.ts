interface IFeaturesHead {
  name?: string;
  type?: string;
}

interface IFeaturesBody {
  head: { text: string }[];
  items: {
    name: { text: string; commingSoon?: boolean }[];
    values: {
      name?: string;
      icon?: "check" | "dash";
      tooltip?: {
        id: string;
        name: string;
        text: string;
      };
    }[];
  }[];
}

interface IFeaturesFooter {
  btns?: {
    variant?: "primary" | "secondary";
    name?: string;
    url?: string;
    onClick?: () => void;
  }[];
  links?: { name?: string; url?: string }[];
}

interface IFeatures {
  head: IFeaturesHead[];
  body: IFeaturesBody[];
  footer: IFeaturesFooter;
}

export const features: IFeatures = {
  head: [
    {},
    { name: "Startup", type: "Cloud" },
    { name: "Business", type: "Cloud" },
    { name: "Enterprise", type: "OnPremises" },
  ],
  body: [
    {
      head: [{ text: "General" }],
      items: [
        {
          name: [{ text: "Hosting" }],
          values: [
            { name: "PublicCloud" },
            { name: "PublicCloud" },
            { name: "OnPremises" },
          ],
        },
        {
          name: [{ text: "Administrators" }],
          values: [{ name: "3" }, { name: "Unlimited" }, { name: "Unlimited" }],
        },
        {
          name: [{ text: "UsersInEachRoom" }],
          values: [
            { name: "Unlimited" },
            { name: "Unlimited" },
            { name: "Unlimited" },
          ],
        },
        {
          name: [{ text: "GuestsInEachRoom" }],
          values: [
            { name: "Unlimited" },
            { name: "Unlimited" },
            { name: "Unlimited" },
          ],
        },
        {
          name: [{ text: "FileStorage" }],
          values: [
            { name: "2GBPerSpace" },
            {
              name: "250GBPer",
              tooltip: {
                id: "file-storage-admin",
                name: "admin",
                text: "TheDocSpaceAdminCanCreateAndManage",
              },
            },
            { name: "Unlimited" },
          ],
        },
        {
          name: [{ text: "StorageQuotasStatistic" }],
          values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "CustomDomainName" }],
          values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "Branding" }],
          values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "Integrations" }],
          values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "FullnameSearchContent" }],
          values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "MultiSpaceManagement" }],
          values: [{ icon: "dash" }, { icon: "dash" }, { icon: "check" }],
        },
      ],
    },
    {
      head: [
        { text: "Rooms" },
        { text: "UpTo12" },
        { text: "Unlimited" },
        { text: "Unlimited" },
      ],
      items: [
        {
          name: [{ text: "CollaborationRooms" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "MeetingRooms" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "CustomRooms" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "PublicRooms" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "FormFillingRooms" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "VirtualDataRooms" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "PrivateRooms", commingSoon: true }],
          values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
        },
      ],
    },
    {
      head: [{ text: "Content" }],
      items: [
        {
          name: [{ text: "TextDocuments" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "Spreadsheets" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "Presentations" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "FillableForms" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "PDFFiles" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "MarkdownFiles" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "EBooks" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "MediaFiles" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
      ],
    },
    {
      head: [{ text: "Security" }],
      items: [
        {
          name: [{ text: "2FA" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "IPRestrictionTrustedMailDomains" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "AccessRightsManagement" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "GoogleSSO" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "SAMLBasedSingle" }],
          values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "SecureLDAP" }],
          values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "BackupRestore" }],
          values: [
            { name: "ManualBackup" },
            { name: "AutomaticBackupRestore" },
            { name: "AutomaticBackupRestore" },
          ],
        },
        {
          name: [{ text: "LoginHistory" }],
          values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
        },
      ],
    },
    {
      head: [{ text: "Migration" }],
      items: [
        {
          name: [{ text: "FromOOWorkspace" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "FromGoogleWorkspace" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
      ],
    },
    {
      head: [{ text: "Apps" }],
      items: [
        {
          name: [{ text: "MobileApps" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "DesktopApps" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
      ],
    },
    {
      head: [{ text: "Support" }],
      items: [
        {
          name: [{ text: "CommunitySupport" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "HelpCenter" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "Webinars" }],
          values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "Trainings" }],
          values: [
            { name: "Paid" },
            { name: "RequestADiscount" },
            { name: "RequestADiscount" },
          ],
        },
        {
          name: [{ text: "EmailSupport" }],
          values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
        },
        {
          name: [{ text: "ResponseTime" }],
          values: [
            { icon: "dash" },
            { name: "48BusinessHours" },
            { name: "DependingOnTheChosenSupportLevel" },
          ],
        },
      ],
    },
  ],
  footer: {
    btns: [
      {},
      {
        variant: "secondary",
        name: "StartNow",
        url: "/docspace-registration",
      },
      { variant: "primary", name: "GetAQuote" },
      { variant: "secondary", name: "GetAQuote" },
    ],
    links: [
      {},
      {},
      { name: "StartWithFreeAccount", url: "/docspace-registration" },
      {
        name: "TryItFree",
        url: "/download?from=docspace-enterprise-prices#docspace-enterprise",
      },
    ],
  },
};
