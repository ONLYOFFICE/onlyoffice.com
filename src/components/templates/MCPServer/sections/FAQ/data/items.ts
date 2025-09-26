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
  },
  {
    label: "Q3",
    children: "A3",
    links: [{ href: "https://github.com/ONLYOFFICE/docspace-mcp?tab=readme-ov-file#installation", isExternal: true }],
  },
  {
    label: "Q4",
    children: "A4",
    links: [{ href: "https://github.com/ONLYOFFICE/docspace-mcp?tab=readme-ov-file#configuration", isExternal: true }],
  },
  {
    label: "Q5",
    children: "A5",
    links: [{ href: "https://github.com/ONLYOFFICE/docspace-mcp?tab=readme-ov-file#tools", isExternal: true }],
  },
  {
    label: "Q6",
    children: "A6",
  },
  {
    label: "Q7",
    children: "A7",
  },
];
