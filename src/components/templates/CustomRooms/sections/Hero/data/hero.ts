import { IRoomsHero } from "@src/components/modules/rooms/RoomsHero";

export const hero: IRoomsHero = {
  heading: "WorkTogetherAccording",
  text: "EditAndCollaborate",
  items: [
    { label: "Tailored" },
    { label: "Sophisticated" },
    { label: "CostEfectiveForAnyBudget" },
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
  videoUrl: "https://www.youtube.com/watch?v=eZLuWwx8VVA",
};
