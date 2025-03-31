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
        url: "https://github.com/ONLYOFFICE/onlyoffice-mattermost",
        isExternal: true,
      },
    ],
  },
  {
    heading: "HowToStartStep3",
  },
];
