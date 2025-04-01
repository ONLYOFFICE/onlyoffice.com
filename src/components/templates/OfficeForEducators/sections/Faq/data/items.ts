import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "HowCanOOAssist",
    children: "HowCanOOAssistAnswer",
    links: [{ href: "/seamless-collaboration" }],
  },
  {
    label: "CanIUseOOForCollaborative",
    children: "CanIUseOOForCollaborativeAnswer",
  },
  {
    label: "DoesOOOfferTemplates",
    children: "DoesOOOfferTemplatesAnswer",
    links: [{ href: "https://templates.onlyoffice.com", isExternal: true }],
  },
  {
    label: "IsOOSecure",
    children: "IsOOSecureAnswer",
    links: [{ href: "/security" }],
  },
  {
    label: "IsOOFree",
    children: "IsOOFreeAnswer",
  },
];
