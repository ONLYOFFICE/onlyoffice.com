import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-liferay/how-to-start/step1.svg",
    heading: "HowToStartStep1",
    headingLinks: [
      {
        url: "/download",
        isExternal: false,
      },
      {
        url: "/docs-registration",
        isExternal: false,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-liferay/how-to-start/step2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://web.liferay.com/marketplace/-/mp/application/171169174",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-liferay/how-to-start/step3.svg",
    heading: "HowToStartStep3",
  },
];
