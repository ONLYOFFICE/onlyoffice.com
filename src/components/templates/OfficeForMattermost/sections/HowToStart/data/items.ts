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
        url: "https://github.com/ONLYOFFICE/onlyoffice-mattermost",
        isExternal: true,
      },
    ],
  },
  {
    text: "HowToStartStep3",
  },
];
