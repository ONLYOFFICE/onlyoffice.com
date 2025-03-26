import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "HowMuchIsDocSpacePerMonth",
    children: "ONLYOFFICEDocSpacePrice",
    links: [{ href: "/docspace-prices" }],
  },
  {
    label: "IsThereASelfHostedVersion",
    children: "SelfHostedVersion",
    links: [{ href: "/download#docspace-enterprise" }],
  },
  {
    label: "WhatIsTheTechnologyStack",
    children: "TheTechnologyStack",
  },
];
