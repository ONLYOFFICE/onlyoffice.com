import { IHowToStartItem } from "@src/components/modules/connectors/HowToStart";

export const items: IHowToStartItem[] = [
  {
    text: "HowToStartStep1",
    textLinks: [
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
    text: "HowToStartStep2",
    textLinks: [
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
    text: "HowToStartStep3",
  },
];
