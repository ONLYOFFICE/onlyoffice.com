import { IRoomsHero } from "@src/components/modules/rooms/RoomsHero";

export const hero: IRoomsHero = {
  heading: "EasilyCollectAndAnalyze",
  text: "OrganizeStraightforwardFormFilling",
  items: [
    { label: "EasyFormUploading" },
    { label: "QuickSharing" },
    { label: "IntuitiveProcess" },
    { label: "ConvenientAnalyzing" },
    { label: "CostEffectiveForAnyBudget" },
  ],
  button: {
    id: "create-free-account",
    label: "CreateFreeAccount",
    href: "/docspace-registration",
  },
  image: {
    url: "HeroImgUrl",
    url2x: "HeroImgUrl2x",
  },
  videoUrl: "https://www.youtube.com/watch?v=9jjiJczIaDY",
};
