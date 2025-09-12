import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IStepCarouselItem[] = [
  {
    imgUrl: getAssetUrl("/images/templates/office-for-zapier/how-to-start/step1.svg"),
    heading: "HowToStartStep1",
    headingLinks: [
      {
        url: "/docspace-registration",
        isExternal: false,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-zapier/how-to-start/step2.svg"),
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://zapier.com/sign-up",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-zapier/how-to-start/step3.svg"),
    heading: "HowToStartStep3",
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-zapier/how-to-start/step4.svg"),
    heading: "HowToStartStep4",
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-zapier/how-to-start/step5.svg"),
    heading: "HowToStartStep5",
  },
];
