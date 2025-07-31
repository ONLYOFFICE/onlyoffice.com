import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "WhatDoTheLifetimeLicenseAnd1YearUpdatesLabel",
    children: "WhatDoTheLifetimeLicenseAnd1YearUpdatesText",
  },
  {
    label: "WhatDoesTheNumberOfUsersLabel",
    children: "WhatDoesTheNumberOfUsersText",
  },
  {
    label: "WhereCanIFindAnswersToOtherQuestionsLabel",
    children: "WhereCanIFindAnswersToOtherQuestionsText",
    links: [
      {
        href: "https://helpcenter.onlyoffice.com/docs/faq/docs-enterprise.aspx",
        isExternal: true,
      },
      {
        href: "mailto:sales@onlyoffice.com",
      },
    ],
  },
];
