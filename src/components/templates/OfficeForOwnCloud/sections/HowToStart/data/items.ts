import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-owncloud/how-to-start/step-1.svg",
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
    imgUrl: "/images/templates/office-for-owncloud/how-to-start/step-2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://marketplace.owncloud.com/apps/onlyoffice",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "HowToStartStep3ImgUrl",
    heading: "HowToStartStep3",
  },
];
