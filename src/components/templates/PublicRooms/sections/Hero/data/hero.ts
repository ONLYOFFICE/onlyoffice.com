import { IRoomsHeroVideo } from "@src/components/modules/rooms/RoomsHeroVideo";

export const hero: IRoomsHeroVideo = {
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
  videoUrl: "https://www.youtube.com/watch?v=MMNt87qcXw0",
  imageVideo: {
    url: "HeroImgUrlVideo",
    url2x: "HeroImgUrlVideo2x",
  },
};
