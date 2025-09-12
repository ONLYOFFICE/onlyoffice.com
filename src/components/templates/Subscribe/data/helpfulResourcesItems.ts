import { ISubscribeItem } from "../sub-components/SubscribeItem";

import { getAssetUrl } from "@utils/getAssetUrl";
const iconSprite = getAssetUrl("/images/templates/subscribe/icons.svg");

export const helpfulResourcesItems: ISubscribeItem[] = [
  {
    icon: {
      url: iconSprite,
      positionX: "-320px",
    },
    heading: "StayUpdatedWithOurBlog",
    text: "DiscoverTipsNewsAndTheLatestUpdates",
  },
  {
    icon: {
      url: iconSprite,
      positionX: "-400px",
    },
    heading: "ExploreOurHelpCenter",
    text: "FindAnswersAndUsefulGuides",
  },
  {
    icon: {
      url: iconSprite,
      positionX: "-480px",
    },
    heading: "GetSupportAnytime",
    text: "ContactUsForFastAssistance",
  },
];
