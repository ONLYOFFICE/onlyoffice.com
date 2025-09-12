import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

import { getAssetUrl } from "@utils/getAssetUrl";
export const itemsTab2: IStepCarouselItem[] = [
  {
    imgUrl: getAssetUrl("/images/templates/office-for-moodle/how-to-start/step_1-1.svg"),
    heading: "HowToStartStep1_1",
    headingLinks: [
      {
        url: "/download#docspace-enterprise",
        isExternal: false,
      },
      {
        url: "/docspace-registration",
        isExternal: false,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-moodle/how-to-start/step_2-1.svg"),
    heading: "HowToStartStep2_1",
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
    imgUrl: getAssetUrl("/images/templates/office-for-moodle/how-to-start/step_3-1.svg"),
    heading: "HowToStartStep3_1",
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-moodle/how-to-start/step_4-1.svg"),
    heading: "HowToStartStep4_1",
  },
];
