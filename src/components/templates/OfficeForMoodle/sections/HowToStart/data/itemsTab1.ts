import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

export const itemsTab1: IStepCarouselItem[] = [
  {
    imgUrl: "/images/templates/office-for-moodle/how-to-start/step-1.svg",
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
    imgUrl: "/images/templates/office-for-moodle/how-to-start/step-2.svg",
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://moodle.org/plugins/mod_onlyofficeeditor",
        isExternal: true,
      },
      {
        url: "https://github.com/ONLYOFFICE/moodle-assignsubmission_onlyoffice",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-moodle/how-to-start/step-3.svg",
    heading: "HowToStartStep3",
  },
  {
    imgUrl: "/images/templates/office-for-moodle/how-to-start/step-4.svg",
    heading: "HowToStartStep4",
  },
];
