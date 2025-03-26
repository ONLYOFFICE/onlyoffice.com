import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-drupal/how-to-start/step1-dc.svg",
    heading: "HowToStartStep1Docs",
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
    imgUrl: "/images/templates/office-for-drupal/how-to-start/step2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://www.drupal.org/project/onlyoffice",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "HowToStartStep3DocsImgUrl",
    heading: "HowToStartStep3",
  },
];
