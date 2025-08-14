import { ISubscribeItem } from "../sub-components/SubscribeItem";

const iconSprite = "/images/templates/subscribe/icons.svg";

export const memberItems: ISubscribeItem[] = [
  {
    icon: {
      url: iconSprite,
    },
    heading: "ExclusiveUpdates",
    text: "BeTheFirstToKnowAboutOurNewProductsAndFeatures",
  },
  {
    icon: {
      url: iconSprite,
      positionX: "-81px",
    },
    heading: "SpecialDiscounts",
    text: "EnjoySubscriberOnlySavingsAndOffers",
  },
  {
    icon: {
      url: iconSprite,
      positionX: "-160px",
    },
    heading: "HandyTips",
    text: "GetExpertAdviceAndUsefulInsights",
  },
  {
    icon: {
      url: iconSprite,
      positionX: "-240px",
    },
    heading: "SneakPeeks",
    text: "GainEarlyAccessToFreshFeatures",
  },
];
