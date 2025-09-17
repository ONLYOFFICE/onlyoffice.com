import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-confluence/how-to-start/step-1.svg",
    heading: "HowToStartStep1",
    headingLinks: [
      {
        url: "/download#docs-enterprise",
        isExternal: false,
      },
      {
        url: "/docs-registration",
        isExternal: false,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-confluence/how-to-start/step-2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://marketplace.atlassian.com/apps/1218214/onlyoffice-connector-for-confluence?tab=overview&hosting=cloud",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-confluence/how-to-start/step-3.svg",
    heading: "HowToStartStep3",
  },
];
