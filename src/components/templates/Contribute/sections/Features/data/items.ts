import { IFeatureItem } from "../sub-components/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
interface IFeatureItemExtended extends Omit<IFeatureItem, "text"> {
  text: {
    label: React.ReactNode;
    links?: { href: string; isExternal?: boolean }[];
  };
}

export const items: IFeatureItemExtended[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/contribute/contacts/icons.svg"),
      positionX: "-566px",
      mobilePositionX: "-380px",
    },
    heading: "TranslateOO",
    text: {
      label: "TranslateOOText",
      links: [
        {
          href: "mailto:documentation@onlyoffice.com",
        },
        {
          href: "https://translate.onlyoffice.com/Account/LogOn?ReturnUrl=%2f",
          isExternal: true,
        },
      ],
    },
    link: {
      label: "MoreInfo",
      href: "https://helpcenter.onlyoffice.com/guides/become-translator.aspx",
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/contribute/contacts/icons.svg"),
      positionX: "-886px",
      mobilePositionX: "-592px",
    },
    heading: "TestOO",
    text: {
      label: "TestOOText",
      links: [
        {
          href: "mailto:press@onlyoffice.com",
        },
        {
          href: "https://helpcenter.onlyoffice.com/docs/contribution/Testing.aspx",
          isExternal: true,
        },
      ],
    },
    link: {
      label: "MoreInfo",
      href: "https://helpcenter.onlyoffice.com/guides/testing.aspx",
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/contribute/contacts/icons.svg"),
      positionX: "-732px",
      mobilePositionX: "-490px",
    },
    heading: "DocumentOO",
    text: {
      label: "DocumentOOText",
      links: [
        {
          href: "mailto:documentation@onlyoffice.com",
        },
        {
          href: "https://helpcenter.onlyoffice.com/docs/contribution/WritingDocumentation.aspx",
          isExternal: true,
        },
      ],
    },
    link: {
      label: "MoreInfo",
      href: "https://helpcenter.onlyoffice.com/guides/writing-documentation.aspx",
    },
  },
];
