import { IHowToStartItem } from "@src/components/modules/connectors/HowToStart";

export const items: IHowToStartItem[] = [
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
        url: "https://connect.nuxeo.com/nuxeo/site/marketplace/package/onlyoffice-nuxeo?version=1.0.0",
        isExternal: true,
      },
    ],
  },
  {
    heading: "HowToStartStep3",
  },
];
