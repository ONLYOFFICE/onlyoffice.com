
import { IRoomsHeroVideo } from "@src/components/modules/rooms/RoomsHeroVideo";

export const hero: IRoomsHeroVideo = {
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
  videoUrl: "https://www.youtube.com/embed/9jjiJczIaDY?si=HGJnJjHRkSl71zvq",
};
