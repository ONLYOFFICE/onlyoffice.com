import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "QuestionEnterprise1",
    children: "AnswerEnterprise1",
    links: [{ href: "/security?from=for-enterprises" }],
  },
  {
    label: "QuestionEnterprise2",
    children: "AnswerEnterprise2",
    links: [
      {
        href: "http://helpcenter.onlyoffice.com/workspace/administration/connecting-external-services",
        isExternal: true,
      },
    ],
  },
  {
    label: "QuestionEnterprise3",
    children: "AnswerEnterprise3",
    links: [{ href: "mailto:sales@onlyoffice.com" }],
  },
];
