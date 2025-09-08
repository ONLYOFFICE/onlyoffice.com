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
  },
  {
    label: "Q4",
    children: "A4",
  },
  {
    label: "Q5",
    children: "A5",
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
