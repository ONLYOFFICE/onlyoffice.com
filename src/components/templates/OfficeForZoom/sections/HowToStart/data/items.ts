import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-zoom/how-to-start/step1.svg",
    heading: "HowToStartStep1",
  },
  {
    imgUrl: "/images/templates/office-for-zoom/how-to-start/step2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://marketplace.zoom.us/apps/OW6rOq-nRgCihG5eps_p-g",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-zoom/how-to-start/step3.svg",
    heading: "HowToStartStep3",
  },
  {
    imgUrl: "/images/templates/office-for-zoom/how-to-start/step4.svg",
    heading: "HowToStartStep4",
  },
];
