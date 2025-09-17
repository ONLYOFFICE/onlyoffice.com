import { IFeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";

type AIAssistantsItem = IFeatureSwitcher["items"][0] & {
  links?: { id: string; url: string }[];
};

export const items: AIAssistantsItem[] = [
  {
    label: "ConnectAnyAIModel",
    image: {
      url: "ConnectAnyAIModelImg",
      url2x: "ConnectAnyAIModelImg2x",
    },
  },
  {
    label: "UseDifferentAIModels",
    image: {
      url: "UseDifferentAIModelsImg",
      url2x: "UseDifferentAIModelsImg2x",
    },
  },
  {
    label: "GenerateTextsImagesAndCode",
    image: {
      url: "GenerateTextsImagesAndCodeImg",
      url2x: "GenerateTextsImagesAndCodeImg2x",
    },
  },
  {
    label: "GetQuickAnswersToYourQuestions",
    image: {
      url: "GetQuickAnswersToYourQuestionsImg",
      url2x: "GetQuickAnswersToYourQuestionsImg2x",
    },
  },
  {
    label: "CheckYourTextSpellingAndGrammar",
    image: {
      url: "CheckYourTextSpellingAndGrammarImg",
      url2x: "CheckYourTextSpellingAndGrammarImg2x",
    },
  },
  {
    label: "EasilyRewriteYourTextMakingItShorterOrLonger",
    image: {
      url: "EasilyRewriteYourTextMakingItShorterOrLongerImg",
      url2x: "EasilyRewriteYourTextMakingItShorterOrLongerImg2x",
    },
  },
  {
    label: "TranslateIntoDifferentLanguages",
    image: {
      url: "TranslateIntoDifferentLanguagesImg",
      url2x: "TranslateIntoDifferentLanguagesImg2x",
    },
  },
];
