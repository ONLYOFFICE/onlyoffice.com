import { IRoomsHero } from "@src/components/modules/rooms/RoomsHero";

export const hero: IRoomsHero = {
  heading: "SimplifyFileSharingWithExternalUsers",
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
