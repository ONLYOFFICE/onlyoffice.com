import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-zapier/how-to-start/step1.svg",
    heading: "HowToStartStep1",
    headingLinks: [
      {
        url: "/docspace-registration",
        isExternal: false,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-zapier/how-to-start/step2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://zapier.com/sign-up",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-zapier/how-to-start/step3.svg",
    heading: "HowToStartStep3",
  },
  {
    imgUrl: "/images/templates/office-for-zapier/how-to-start/step4.svg",
    heading: "HowToStartStep4",
  },
  {
    imgUrl: "/images/templates/office-for-zapier/how-to-start/step5.svg",
    heading: "HowToStartStep5",
  },
];
