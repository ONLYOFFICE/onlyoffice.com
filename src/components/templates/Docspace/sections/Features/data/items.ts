import { getAssetUrl } from "@utils/getAssetUrl";
const items = [
  {
    heading: "AICardHeading",
    text: "AICardText",
    image: {
      url: "AICardImageUrl",
      height: 480,
      width: 544,
    },
    links: [{
      href: "/ai-assistants",
      label: "LearnMore",
    }],
  },

  {
    heading: "ExtraCardHeading",
    text: "ExtraCardText",
    image: {
      url: getAssetUrl("/images/templates/docspace/ai/features-plugins.svg"),
      height: 480,
      width: 544,
    },
    links: [{
      href: "/app-directory",
      label: "LearnMore",
    }],
  },
];

export { items };
