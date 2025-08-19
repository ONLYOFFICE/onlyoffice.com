import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "Q1",
    children: "A1",
    links: [
      {
        href: "/document-editor-comparison",
      },
    ],
  },
  {
    label: "Q2",
    children: "A2",
    links: [
      {
        href: "/security",
      },
    ],
  },
  {
    label: "Q3",
    children: "A3",
    links: [
      {
        href: "/contribute",
      },
      {
        href: "/vacancies",
      },
    ],
  },
  {
    label: "Q4",
    children: "A4",
    links: [
      {
        href: "https://helpcenter.onlyoffice.com/",
        isExternal: true,
      },
      {
        href: "https://community.onlyoffice.com/",
        isExternal: true,
      },
      {
        href: "mailto:sales@onlyoffice.com",
      },
    ],
  },
];
