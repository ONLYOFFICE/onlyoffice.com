import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IStepCarouselItem[] = [
  {
    imgUrl: getAssetUrl("/images/templates/office-for-humhub/how-to-start/step1.svg"),
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
    imgUrl: getAssetUrl("/images/templates/office-for-humhub/how-to-start/step2.svg"),
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://marketplace.humhub.com/module/onlyoffice/description",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-humhub/how-to-start/step3.svg"),
    heading: "HowToStartStep3",
  },
];
