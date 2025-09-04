import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "IsOOrReallyFree",
    children: "IsONLYOFFICEReallyFreeDescription",
    links: [
      { href: "https://github.com/ONLYOFFICE", isExternal: true },
      { href: "/desktop" },
      { href: "/download-desktop#mobile" },
      { href: "/docspace-registration" },
      { href: "/download-community" },
    ],
  },
  {
    label: "WhatIsOOUsedFor",
    children: "WhatIsONLYOFFICEUsedForDescription",
    links: [
      { href: "/office-suite" },
      { href: "/all-connectors" },
      { href: "/docspace" },
      { href: "/developer-edition" },
      { href: "/desktop" },
      { href: "/download-desktop#mobile" },
    ],
  },
  {
    label: "IsOOSafeToUse",
    children: "IsONLYOFFICESafeToUse",
    links: [{ href: "/security" }],
  },
  {
    label: "CanIUseOOOffline",
    children: "CanIUseONLYOFFICEOfflineDescription",
    links: [{ href: "/download-desktop#desktop" }],
  },
  {
    label: "DoesOOHaveAds",
    children: "NoOOIsAdFree",
  },
  {
    label: "WhoOwnsOO",
    children: "OOIsOwnedByAscensioSystemSIA",
    links: [{ href: "https://onlyo.co/3UKteVe", isExternal: true }],
  },
  {
    label: "WhoIsTheCEOOfOO",
    children: "TheFounderAndTheCEOOfOO",
    links: [
      {
        href: "https://www.linkedin.com/in/lev-bannov-6193aa32/",
        isExternal: true,
      },
    ],
  },
];
