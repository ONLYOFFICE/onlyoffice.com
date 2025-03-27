import { IRoomHero } from "@src/components/modules/room/RoomHero";

export const hero: IRoomHero = {
  title: "EasilyCollectAndAnalyze",
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
};
