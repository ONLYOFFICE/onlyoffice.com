import { ICollapse } from "@src/components/ui/CollapseGroup/Collapse";
import { SupportLevels } from "../sub-components/SupportLevels";

interface ICollapseExtended extends ICollapse {
  links?: { href: string; isExternal?: boolean }[];
}

export const items: ICollapseExtended[] = [
  {
    label: "SimultaneousConnectionsMeanLabel",
    children: "SimultaneousConnectionsMeanText",
  },
  {
    label: "TheSupportLevelsLabel",
    children: <SupportLevels />,
  },
  {
    label: "StandardBrandingAndWhiteLabelOptionsLabel",
    children: "StandardBrandingAndWhiteLabelOptionsText",
    links: [{ href: "mailto:sales@onlyoffice.com" }],
  },
  {
    label: "ProvideMyCustomersWithOODesktopAndMobileLabel",
    children: "ProvideMyCustomersWithOODesktopAndMobileText",
    links: [{ href: "mailto:sales@onlyoffice.com" }],
  },
  {
    label: "IFindAnswersToOtherQuestionsLabel",
    children: "IFindAnswersToOtherQuestionsText",
    links: [
      {
        href: "https://helpcenter.onlyoffice.com/docs/faq/developer.aspx",
        isExternal: true,
      },
      { href: "mailto:sales@onlyoffice.com" },
    ],
  },
];
