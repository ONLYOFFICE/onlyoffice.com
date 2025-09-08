import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";
import { SupportLevels } from "../sub-components/SupportLevels";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "WhatDoTheLifetimeLicenseAnd3YearUpdatesLabel",
    children: "WhatDoTheLifetimeLicenseAnd3YearUpdatesText",
  },
  {
    label: "WhatDoThe1YearLicenseLabel",
    children: "WhatDoThe1YearLicenseText",
  },
  {
    label: "WhatDoesTheNumberOfUsersLabel",
    children: "WhatDoesTheNumberOfUserstext",
  },
  {
    label: "WhatIsTheDifferenceBetweenTheSupportLevelsLabel",
    children: <SupportLevels />,
  },
  {
    label: "CanIUseOODocsEnterpriseUnderMyCompanyBrandLabel",
    children: "CanIUseOODocsEnterpriseUnderMyCompanyBrandText",
    links: [
      {
        href: "SalesOOMail",
      },
    ],
  },
  {
    label: "WhatIfIRepresentAnEducationalInstitutionLabel",
    children: "WhatIfIRepresentAnEducationalInstitutionText",
    links: [
      {
        href: "SalesOOMail",
      },
    ],
  },
  {
    label: "WhereCanIFindAnswersToOtherQuestionsLabel",
    children: "WhereCanIFindAnswersToOtherQuestionsText",
    links: [
      {
        href: "WhereCanIFindAnswersToOtherQuestionsLink",
        isExternal: true,
      },
      {
        href: "SalesOOMail",
      },
    ],
  },
];
