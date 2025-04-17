import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";
import { IStepCarouselTab } from "@src/components/widgets/StepCarousel/StepCarousel.types";

const docsItems: IStepCarouselItem[] = [
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

const cloudItems: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-drupal/how-to-start/step1-ds.svg",
    heading: "HowToStartStep1Docspace",
    headingLinks: [
      {
        url: "/docspace-registration",
        isExternal: false,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-drupal/how-to-start/step2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://www.drupal.org/project/onlyoffice_docspace",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "HowToStartStep3DocspaceImgUrl",
    heading: "HowToStartStep3",
  },
];

export const items: IStepCarouselTab[] = [
  {
    id: "docs-tab",
    label: "Docs",
    items: docsItems,
  },
  {
    id: "docspace-tab",
    label: "Docspace",
    items: cloudItems,
  },
];
