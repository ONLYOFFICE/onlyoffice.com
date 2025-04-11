import { IFeatureItem } from "@src/components/widgets/FeatureItem";

export const items: IFeatureItem[] = [
  {
    id: "translate-oo",
    icon: {
      url: "/images/templates/contribute/contacts/icons.svg",
    },
    heading: "TranslateOO",
    text: ["TranslateOOText1", "TranslateOOText2", "TranslateOOText3"],
    links: [
      {
        href: "mailto:documentation@onlyoffice.com",
      },
      {
        href: "https://translate.onlyoffice.com/Account/LogOn?ReturnUrl=%2f",
      },
      {
        href: "https://helpcenter.onlyoffice.com/docs/contribution/become-translator.aspx",
      },
    ],
  },
  {
    id: "test-oo",
    icon: {
      url: "/images/templates/contribute/contacts/icons.svg",
    },
    heading: "TestOO",
    text: ["TestOOText1", "TestOOText2", "TestOOText3"],
    links: [
      {
        href: "mailto:press@onlyoffice.com",
      },
      {
        href: "https://helpcenter.onlyoffice.com/docs/contribution/Testing.aspx",
      },
    ],
  },
  {
    id: "document-00",
    icon: {
      url: "/images/templates/contribute/contacts/icons.svg",
    },
    heading: "DocumentOO",
    text: [
      "DocumentOOText1",
      "DocumentOOText2",
      "DocumentOOText3",
      "DocumentOOText4",
      "DocumentOOText5",
    ],
    links: [
      {
        href: "mailto:documentation@onlyoffice.com",
      },
      {
        href: "https://helpcenter.onlyoffice.com/docs/contribution/WritingDocumentation.aspx",
      },
    ],
  },
];
