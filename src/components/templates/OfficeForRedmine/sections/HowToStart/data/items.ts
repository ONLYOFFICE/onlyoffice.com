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
        url: "https://www.redmine.org/plugins/onlyoffice_redmine",
        isExternal: true,
      },
    ],
  },
  {
    heading: "HowToStartStep3",
  },
];
