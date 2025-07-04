import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "QuestionSMBs1",
    children: "AnswerSMBs1",
    links: [
      {
        href: "https://helpcenter.onlyoffice.com/workspace/administration/connecting-external-services",
        isExternal: true,
      },
    ],
  },
  {
    label: "QuestionSMBs2",
    children: "AnswerSMBs2",
    links: [
      {
        href: "https://www.onlyoffice.com/blog/2018/05/how-onlyoffice-complies-with-gdpr/",
        isExternal: true,
      },
    ],
  },
  {
    label: "QuestionSMBs3",
    children: "AnswerSMBs3",
  },
  {
    label: "QuestionSMBs4",
    children: "AnswerSMBs4",
    links: [{ href: "mailto:sales@onlyoffice.com" }],
  },
];
