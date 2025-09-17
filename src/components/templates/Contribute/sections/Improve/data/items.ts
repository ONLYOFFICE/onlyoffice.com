import { IImproveItem } from "../sub-components/ImproveItem";

import { getAssetUrl } from "@utils/getAssetUrl";
interface IImproveItemExtended extends Omit<IImproveItem, "text"> {
  text: {
    label: string;
    links?: { href: string; isExternal?: boolean }[];
  };
}

export const items: IImproveItemExtended[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/contribute/improve/icons.svg"),
      positionX: "-136px",
      mobilePositionX: "-92px",
    },
    text: {
      label: "DevelopYourOwnPluginOrMacros",
    },
    link: {
      label: "ReadAPIDocumentation",
      href: "DevelopYourOwnPluginOrMacrosLink",
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/contribute/improve/icons.svg"),
      positionX: "0px",
      mobilePositionX: "0px",
    },
    text: {
      label: "CreateYourOwnForm",
    },
    link: {
      label: "OpenOurFormLibrary",
      href: "templatesLink",
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/contribute/improve/icons.svg"),
      positionX: "-280px",
      mobilePositionX: "-188px",
    },
    text: {
      label: "CreateAnExtensionOrModule",
    },
    link: {
      label: "ReadAPIDocumentation",
      href: "CreateAnExtensionOrModuleLink",
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/contribute/improve/icons.svg"),
      positionX: "-417px",
      mobilePositionX: "-282px",
    },
    text: {
      label: "DidYouFindABug",
      links: [
        { href: "https://github.com/ONLYOFFICE/", isExternal: true },
        {
          href: "https://community.onlyoffice.com/",
          isExternal: true,
        },
      ],
    },
    link: {
      label: "MoreInfo",
      href: "DidYouFindABugLink",
    },
  },
];
