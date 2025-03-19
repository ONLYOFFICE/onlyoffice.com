import { IRoomsHero } from "@src/components/widgets/RoomsHero";

export const hero: IRoomsHero = {
  title: "WorkTogetherBetterInCollaborationRooms",
  text: "EnjoyStressFreeCoEditing",
  items: [
    { label: "IdealForTeamwork" },
    { label: "SecureForSensitiveDocuments" },
    { label: "ConvenientForMultipleCoAuthors" },
    { label: "CostEffectiveForAnyBudget" },
  ],
  button: {
    id: "create-free-account",
    label: "CreateFreeAccount",
    href: "/docspace-registration",
  },
  imgUrl: "HeroImgUrl",
  imgUrl2x: "HeroImgUrl2x",
  imgWidth: 672,
  imgHeight: 730,
};
