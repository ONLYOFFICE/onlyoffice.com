import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export const items: IFeatureImageItem[] = [
  {
    title: "TeamworkHasNeverBeenEasier",
    text: "TeamworkHasNeverBeenEasierDesc",
    image: {
      url: "TeamworkHasNeverBeenEasierUrl",
      url2x: "TeamworkHasNeverBeenEasierUrl2x",
      height: 550,
    },
  },
  {
    title: "FitToAnyScenario",
    text: "FitToAnyScenarioDesc",
    links: [
      {
        href: "/form-filling-rooms",
      },
      {
        href: "/collaboration-rooms",
      },
      {
        href: "/custom-rooms",
      },
      {
        href: "/public-rooms",
      },
      {
        href: "/office-for-zoom",
      },
    ],
    image: {
      url: "FitToAnyScenarioUrl",
      url2x: "FitToAnyScenarioUrl2x",
      height: 550,
    },
  },
  {
    title: "StressFreeCoEditing",
    text: "StressFreeCoEditingDesc",
    image: {
      url: "StressFreeCoEditingUrl",
      url2x: "StressFreeCoEditingUrl2x",
      height: 540,
    },
  },
];
