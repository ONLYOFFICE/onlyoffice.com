import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";
import { SupportLevels } from "../sub-components/SupportLevels";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "WhatIfINeedMoreFileStorage",
    children: "PleaseSubmitYourRequest",
    links: [{ href: "mailto:sales@onlyoffice.com" }],
  },
  {
    label: "WhatIfIRepresentANonprofitOrganization",
    children: "IfYouAreANonprofitOrganizationOrASchool",
    links: [
      { href: "/nonprofit-organizations?from=docspace-prices" },
      { href: "/office-for-educators?from=docspace-prices" },
    ],
  },
  {
    label: "WhatIsTheDifferenceBetweenTheSupportLevels",
    children: <SupportLevels />,
  },
  {
    label: "WhereCanIFindAnswersToOtherQuestions",
    children: "PleaseVisitOurFAQCenter",
    links: [
      {
        href: "https://helpcenter.onlyoffice.com/faq/faq.aspx",
        isExternal: true,
      },
      { href: "mailto:sales@onlyoffice.com" },
    ],
  },
];
