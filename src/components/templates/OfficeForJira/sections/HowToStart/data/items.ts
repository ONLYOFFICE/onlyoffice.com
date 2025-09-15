import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-jira/how-to-start/step1.svg",
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
    imgUrl: "/images/templates/office-for-jira/how-to-start/step2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://marketplace.atlassian.com/apps/1226616/onlyoffice-connector-for-jira?tab=overview&hosting=datacenter",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "HowToStartStep3Url",
    heading: "HowToStartStep3",
  },
];
