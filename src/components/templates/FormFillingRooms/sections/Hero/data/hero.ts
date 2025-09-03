import { IRoomsHeroVideo } from "@src/components/modules/rooms/RoomsHeroVideo";

export const hero: IRoomsHeroVideo = {
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
  videoUrl: "https://www.youtube.com/embed/9jjiJczIaDY?si=tvfy6xIjoE-2xZ3Z",
};
