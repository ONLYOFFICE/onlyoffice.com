import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-trello/how-to-start/step1.svg",
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
    imgUrl: "/images/templates/office-for-trello/how-to-start/step2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://trello.com/power-ups/620a31232ca1ad777e07c789/onlyoffice",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-trello/how-to-start/step3.svg",
    heading: "HowToStartStep3",
  },
];
