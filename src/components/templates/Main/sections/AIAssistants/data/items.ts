import { IFeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";



type AIAssistantsItem = IFeatureSwitcher["items"][0] & {
  links?: { id: string; url: string }[];
};

export const items: AIAssistantsItem[] = [
  {
    label: "ConnectAnyAIModel",
    image: {
      url: "/images/templates/main/ai-assistants/ConnectAnyAIModelImg.png",
      url2x: "/images/templates/main/ai-assistants/ConnectAnyAIModelImg@2x.png",
    },
  },
  {
    label: "UseDifferentAIModels",
    image: {
      url: "/images/templates/main/ai-assistants/UseDifferentAIModelsImg.png",
      url2x: "/images/templates/main/ai-assistants/UseDifferentAIModelsImg@2x.png",
    },
  },
  {
    label: "GenerateTextsImagesAndCode",
    image: {
      url: "/images/templates/main/ai-assistants/GenerateTextsImagesAndCodeImg.png",
      url2x: "/images/templates/main/ai-assistants/GenerateTextsImagesAndCodeImg@2x.png",
    },
  },
  {
    label: "GetQuickAnswersToYourQuestions",
    image: {
      url: "/images/templates/main/ai-assistants/GetQuickAnswersToYourQuestionsImg.png",
      url2x: "/images/templates/main/ai-assistants/GetQuickAnswersToYourQuestionsImg@2x.png",
    },
  },
  {
    label: "CheckYourTextSpellingAndGrammar",
    image: {
      url: "/images/templates/main/ai-assistants/CheckYourTextSpellingAndGrammarImg.png",
      url2x: "/images/templates/main/ai-assistants/CheckYourTextSpellingAndGrammarImg@2x.png",
    },
  },
  {
    label: "EasilyRewriteYourTextMakingItShorterOrLonger",
    image: {
      url: "/images/templates/main/ai-assistants/EasilyRewriteYourTextMakingItShorterOrLongerImg.png",
      url2x: "/images/templates/main/ai-assistants/EasilyRewriteYourTextMakingItShorterOrLongerImg@2x.png",
    },
  },
  {
    label: "TranslateIntoDifferentLanguages",
    image: {
      url: "/images/templates/main/ai-assistants/TranslateIntoDifferentLanguagesImg.png",
      url2x: "/images/templates/main/ai-assistants/TranslateIntoDifferentLanguagesImg@2x.png",
    },
  },
];
