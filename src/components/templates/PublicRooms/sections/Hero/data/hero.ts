import { IRoomHero } from "@src/components/modules/room/RoomHero";

export const hero: IRoomHero = {
  title: "SimplifyFileSharingWithExternalUsers",
  text: "EasilyInteractWithThirdParties",
  items: [
    { label: "IdealForPublicSharing" },
    { label: "AbsolutelySafe" },
    { label: "EasyToStore" },
    { label: "SeamlesslyEmbeddable" },
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
