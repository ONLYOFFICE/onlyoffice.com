import { IStepCarouselItem } from "@src/components/widgets/StepCarousel";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IStepCarouselItem[] = [
  {
    imgUrl: getAssetUrl("/images/templates/ai-assistants/how-to-start/en/step_1.svg"),
    heading: "SwitchToThePluginsTab",
  },
  {
    imgUrl: getAssetUrl("/images/templates/ai-assistants/how-to-start/en/step_2.svg"),
    heading: "LaunchPluginManager",
  },
  {
    imgUrl: getAssetUrl("/images/templates/ai-assistants/how-to-start/en/step_3.svg"),
    heading: "ClickInstall",
  },
  {
    imgUrl: getAssetUrl("/images/templates/ai-assistants/how-to-start/en/step_4.svg"),
    heading: "AccessTheAIPlugin",
  },
  {
    imgUrl: getAssetUrl("/images/templates/ai-assistants/how-to-start/en/step_5.svg"),
    heading: "ClickSettings",
  },
  {
    imgUrl: getAssetUrl("/images/templates/ai-assistants/how-to-start/en/step_6.svg"),
    heading: "ClickEditAIModels",
  },
  {
    imgUrl: getAssetUrl("/images/templates/ai-assistants/how-to-start/en/step_7.svg"),
    heading: "SelectTheRequiredAIModels",
  },
];
