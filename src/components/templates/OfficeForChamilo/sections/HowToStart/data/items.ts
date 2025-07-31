import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-chamilo/how-to-start/step1.svg",
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
    imgUrl: "/images/templates/office-for-chamilo/how-to-start/step2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://github.com/ONLYOFFICE/onlyoffice-chamilo",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "HowToStartStep3ImgUrl",
    heading: "HowToStartStep3",
  },
  {
    imgUrl: "HowToStartStep4ImgUrl",
    heading: "HowToStartStep4",
  },
];
