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
        url: "https://connect.nuxeo.com/nuxeo/site/marketplace/package/onlyoffice-nuxeo?version=1.0.0",
        isExternal: true,
      },
    ],
  },
  {
    text: "HowToStartStep3",
  },
];
