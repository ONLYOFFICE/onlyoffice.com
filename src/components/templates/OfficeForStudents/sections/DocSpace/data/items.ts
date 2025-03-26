import { IFeatureTextImage } from "@src/components/widgets/FeatureTextImage";

export const items: IFeatureTextImage[] = [
  {
    title: "TeamworkHasNeverBeenEasier",
    text: "TeamworkHasNeverBeenEasierDesc",
    image: {
      url: "TeamworkHasNeverBeenEasierUrl",
      url2x: "TeamworkHasNeverBeenEasierUrl2x",
    },
    imageHeight: 550,
  },
  {
    title: "FitToAnyScenario",
    text: "FitToAnyScenarioDesc",
    links: [
      {
        href: "form-filling-rooms",
        isExternal: false,
      },
      {
        href: "collaboration-rooms",
        isExternal: false,
      },
      {
        href: "custom-rooms",
        isExternal: false,
      },
      {
        href: "public-rooms",
        isExternal: false,
      },
      {
        href: "office-for-zoom",
        isExternal: false,
      },
    ],
    image: {
      url: "FitToAnyScenarioUrl",
      url2x: "FitToAnyScenarioUrl2x",
    },
    imageHeight: 550,
  },
  {
    title: "StressFreeCoEditing",
    text: "StressFreeCoEditingDesc",
    image: {
      url: "StressFreeCoEditingUrl",
      url2x: "StressFreeCoEditingUrl2x",
    },
    imageHeight: 540,
  },
];
