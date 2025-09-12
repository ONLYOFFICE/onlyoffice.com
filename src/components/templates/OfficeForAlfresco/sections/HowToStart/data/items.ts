import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IStepCarouselItem[] = [
  {
    imgUrl: getAssetUrl("/images/templates/office-for-alfresco/how-to-start/step-1.svg"),
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
    imgUrl: getAssetUrl("/images/templates/office-for-alfresco/how-to-start/step-2.svg"),
    heading: "HowToStartStep2",
    headingLinks: [
      {
        url: "https://hub.alfresco.com/t5/alfresco-content-services-add/onlyoffice-connector-for-alfresco/td-p/291397",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/office-for-alfresco/how-to-start/step-3.svg"),
    heading: "HowToStartStep3",
  },
];
