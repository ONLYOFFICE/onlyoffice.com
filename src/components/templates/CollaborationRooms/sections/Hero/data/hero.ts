import { IRoomHero } from "@src/components/modules/room/RoomHero";

export const hero: IRoomHero = {
  title: "WorkTogetherBetterInCollaborationRooms",
  text: "EnjoyStressFreeCoEditing",
  items: [
    { label: "IdealForTeamwork" },
    { label: "SecureForSensitiveDocuments" },
    { label: "ConvenientForMultipleCoAuthors" },
    { label: "CostEffectiveForAnyBudget" },
  ],
  button: {
    label: "CreateFreeAccount",
    href: "/docspace-registration",
  },
  image: {
    url: "HeroImgUrl",
    url2x: "HeroImgUrl2x",
  },
};
