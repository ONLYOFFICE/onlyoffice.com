import { IStepCarouselItem, IStepCarouselTab } from "@src/components/widgets/StepCarousel";
import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

const firstTabItems: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-wordpress/how-to-start/step1-dc.svg",
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
    imgUrl: "HowToStartStep2DocsImgUrl",
    heading: "HowToStartStep2Docs",
    headingLinks: [
      {
        url: "https://github.com/ONLYOFFICE/onlyoffice-wordpress",
        isExternal: true,
      },
      {
        url: "https://wordpress.org/plugins/onlyoffice",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "HowToStartStep3DocsImgUrl",
    heading: "HowToStartStep3",
  },
];

const secondTabItems: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-wordpress/how-to-start/step1-ds.svg",
    heading: "HowToStartStep1Docspace",
    headingLinks: [
      {
        url: "/docspace-registration",
        isExternal: false,
      },
    ],
  },
  {
    imgUrl: "HowToStartStep2DocspaceImgUrl",
    heading: "HowToStartStep2Docspace",
    headingLinks: [
      {
        url: "https://wordpress.org/plugins/onlyoffice-docspace",
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
    id: "docs",
    label: "Docs",
    items: firstTabItems,
  },
  {
    id: "docspace",
    label: "Docspace",
    items: secondTabItems,
  },
];
