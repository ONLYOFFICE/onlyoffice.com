import { IStepCarouselTab } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselTab[] = [
  {
    label: "DocSpace",
    items: [
      {
        imgUrl:
          "/images/templates/office-for-wordpress/how-to-start/step1-ds.svg",
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
    ],
  },
  {
    label: "Docs",
    items: [
      {
        imgUrl:
          "/images/templates/office-for-wordpress/how-to-start/step1-dc.svg",
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
    ],
  },
];
