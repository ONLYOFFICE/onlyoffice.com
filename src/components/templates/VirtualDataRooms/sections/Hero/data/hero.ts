import { IRoomsHero } from "@src/components/modules/rooms/RoomsHero";

export const hero: IRoomsHero = {
  heading: "UseVirtualDataRooms",
  text: "OrganizeSecure",
  items: [
    { label: "IdealForDueDiligence" },
    { label: "CompletelyOrganized" },
    { label: "HighLevelOfDataSecurity" },
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
