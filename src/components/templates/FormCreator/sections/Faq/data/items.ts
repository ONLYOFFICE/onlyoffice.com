import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "Q1",
    children: "A1",
  },
  {
    label: "Q2",
    children: "A2",
    links: [{ href: "https://templates.onlyoffice.com/", isExternal: true }],
  },
  {
    label: "Q3",
    children: "A3",
  },
  {
    label: "Q4",
    children: "A4",
    links: [{ href: "/developer-edition" }],
  },
  {
    label: "Q5",
    children: "A5",
  },
];
