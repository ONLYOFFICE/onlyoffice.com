import { IStepCarouselItem, IStepCarouselTab } from "@src/components/widgets/StepCarousel";

const firstTabItems: IStepCarouselItem[] = [
  {
    imgUrl: "HowToStartStep1DocsImgUrl",
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
        url: "https://www.pipedrive.com/en/marketplace/app/onlyoffice/ab1362af3cc9f7be",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "HowToStartStep3DocsImgUrl",
    heading: "HowToStartStep3Docs",
  },
];

const secondTabItems: IStepCarouselItem[] = [
  {
    imgUrl: "HowToStartStep1DocspaceImgUrl",
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
        url: "https://www.pipedrive.com/en/marketplace/app/onlyoffice-doc-space/4cb3b5d9d19a1918",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "HowToStartStep3DocspaceImgUrl",
    heading: "HowToStartStep3Docspace",
  },
];

export const items: IStepCarouselTab[] = [
  {
    id: "docs-tab",
    label: "Docs",
    items: firstTabItems,
  },
  {
    id: "docspace-tab",
    label: "Docspace",
    items: secondTabItems,
  },
];
