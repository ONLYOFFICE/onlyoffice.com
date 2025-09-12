import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IStepCarouselItem[] = [
  {
    imgUrl: getAssetUrl("/images/templates/office-for-box/how-to-start/step-1.svg"),
    heading: "HowToStartStep1",
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-box/how-to-start/step-2.svg"),
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://app.box.com/app-center/onlyoffice_personal/app",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-box/how-to-start/step-3.svg"),
    heading: "HowToStartStep3",
  },
];
