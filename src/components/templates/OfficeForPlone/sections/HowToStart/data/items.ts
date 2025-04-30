import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const items: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-plone/how-to-start/step1.svg",
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
    imgUrl: "/images/templates/office-for-plone/how-to-start/step2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://pypi.org/project/onlyoffice.plone/#description",
        isExternal: true,
      },
      {
        url: "https://github.com/ONLYOFFICE/onlyoffice-plone",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-plone/how-to-start/step3.svg",
    heading: "HowToStartStep3",
  },
];
