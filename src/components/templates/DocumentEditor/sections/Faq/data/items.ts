import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "Q1",
    children: "A1",
    links: [{ href: "/download-desktop" }],
  },
  {
    label: "Q2",
    children: "A2",
    links: [{ href: "/download-desktop" }],
  },
  {
    label: "Q3",
    children: "A3",
    links: [{ href: "/developer-edition" }],
  },
];
