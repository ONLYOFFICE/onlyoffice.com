import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-dropbox/how-to-start/step-1.svg",
    heading: "HowToStartStep1",
  },
  {
    imgUrl: "/images/templates/office-for-dropbox/how-to-start/step-2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://dropbox.onlyoffice.com/oauth/redirect",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-dropbox/how-to-start/step-3.svg",
    heading: "HowToStartStep3",
  },
  {
    imgUrl: "/images/templates/office-for-dropbox/how-to-start/step-4.svg",
    heading: "HowToStartStep4",
  },
  {
    imgUrl: "/images/templates/office-for-dropbox/how-to-start/step-5.svg",
    heading: "HowToStartStep5",
  },
];
