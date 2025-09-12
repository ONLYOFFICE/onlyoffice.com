import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IStepCarouselItem[] = [
  {
    imgUrl: getAssetUrl("/images/templates/affiliates/how-to-start/step1.svg"),
    heading: "RegisterInRewardful",
  },
  {
    imgUrl: getAssetUrl("/images/templates/affiliates/how-to-start/step2.svg"),
    heading: "GenerateYourPersonalAffiliateLinks",
  },
  {
    imgUrl: getAssetUrl("/images/templates/affiliates/how-to-start/step3.svg"),
    heading: "RewardfulPortal",
  },
];
