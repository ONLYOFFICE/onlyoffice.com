import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "HowQualify",
    children: "WeAccept",
  },
  {
    label: "WhatTypes",
    children: "PreferableTopics",
  },
  {
    label: "WhichRewards",
    children: "AmongContributionRewards",
  },
  {
    label: "DoYouHave",
    children: "PleaseCheck",
    links: [{ href: "/press-downloads" }],
  },
];
