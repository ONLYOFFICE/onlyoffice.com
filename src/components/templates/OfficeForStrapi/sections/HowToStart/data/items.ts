import { ISimpleHowToStartItem } from "@src/components/widgets/SimpleHowToStart";

export const items: ISimpleHowToStartItem[] = [
  {
    heading: "HowToStartStep1",
    headingLinks: [
      {
        url: "/download-docs",
        isExternal: false,
      },
      {
        url: "/docs-registration",
        isExternal: false,
      },
    ],
  },
  {
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://market.strapi.io/plugins/onlyoffice-strapi",
        isExternal: true,
      },
      {
        url: "https://www.npmjs.com/package/onlyoffice-strapi",
        isExternal: true,
      },
    ],
  },
  {
    heading: "HowToStartStep3",
  },
];
