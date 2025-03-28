import { IRoomHero } from "@src/components/modules/room/RoomHero";

export const hero: IRoomHero = {
  title: "WorkTogetherAccording",
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
};
