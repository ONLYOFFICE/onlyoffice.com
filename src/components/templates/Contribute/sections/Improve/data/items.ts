import { IFeatureItem } from "@src/components/widgets/FeatureItem";

export interface IFeatureItemExtended extends IFeatureItem {
  icon: IFeatureItem["icon"] & { mobilePositionX: string };
  itemLink: { label: string; href: string };
}

export const items: IFeatureItemExtended[] = [
  {
    icon: {
      url: "/images/templates/contribute/improve/icons.svg",
      positionX: "-136px",
      mobilePositionX: "-92px",
    },
    text: "DevelopYourOwnPluginOrMacros",
    itemLink: {
      label: "ReadAPIDocumentation",
      href: "https://api.onlyoffice.com/docs/plugin-and-macros/get-started/overview/",
    },
  },
  {
    icon: {
      url: "/images/templates/contribute/improve/icons.svg",
      positionX: "0px",
      mobilePositionX: "0px",
    },
    text: "CreateYourOwnForm",
    itemLink: {
      label: "OpenOurFormLibrary",
      href: "https://templates.onlyoffice.com/",
    },
  },
  {
    icon: {
      url: "/images/templates/contribute/improve/icons.svg",
      positionX: "-280px",
      mobilePositionX: "-188px",
    },
    text: "CreateAnExtensionOrModule",
    itemLink: {
      label: "ReadAPIDocumentation",
      href: "https://api.onlyoffice.com/docspace/plugins-sdk/get-started/basic-concepts/",
    },
  },
  {
    icon: {
      url: "/images/templates/contribute/improve/icons.svg",
      positionX: "-417px",
      mobilePositionX: "-282px",
    },
    text: "DidYouFindABug",
    links: [
      { href: "https://github.com/ONLYOFFICE/" },
      {
        href: "https://forum.onlyoffice.com/?_ga=2.159844410.648881030.1661151945-1933786737.1539158971",
      },
    ],
    itemLink: {
      label: "MoreInfo",
      href: "https://helpcenter.onlyoffice.com/docs/contribution/ReportIssues.aspx",
    },
  },
];
