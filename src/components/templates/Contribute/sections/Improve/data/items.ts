import { IImproveItem } from "../sub-components/ImproveItem";

interface IImproveItemExtended extends Omit<IImproveItem, "text"> {
  text: {
    label: string;
    links?: { href: string; isExternal?: boolean }[];
  };
}

export const items: IImproveItemExtended[] = [
  {
    icon: {
      url: "/images/templates/contribute/improve/icons.svg",
      positionX: "-136px",
      mobilePositionX: "-92px",
    },
    text: {
      label: "DevelopYourOwnPluginOrMacros",
    },
    link: {
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
    text: {
      label: "CreateYourOwnForm",
    },
    link: {
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
    text: {
      label: "CreateAnExtensionOrModule",
    },
    link: {
      label: "ReadAPIDocumentation",
      href: "api.onlyoffice.com/docspace/plugins-sdk/get-started/",
    },
  },
  {
    icon: {
      url: "/images/templates/contribute/improve/icons.svg",
      positionX: "-417px",
      mobilePositionX: "-282px",
    },
    text: {
      label: "DidYouFindABug",
      links: [
        { href: "https://github.com/ONLYOFFICE/", isExternal: true },
        {
          href: "https://forum.onlyoffice.com/?_ga=2.159844410.648881030.1661151945-1933786737.1539158971",
          isExternal: true,
        },
      ],
    },
    link: {
      label: "MoreInfo",
      href: "https://helpcenter.onlyoffice.com/docs/contribution/ReportIssues.aspx",
    },
  },
];
