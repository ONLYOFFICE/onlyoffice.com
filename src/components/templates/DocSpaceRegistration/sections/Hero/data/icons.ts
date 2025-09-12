import { IIconTooltip } from "@src/components/widgets/IconTooltip";

import { getAssetUrl } from "@utils/getAssetUrl";
const iconsSprite = getAssetUrl("/images/templates/docspace-registration/hero/icons.svg");

export const icons: IIconTooltip[] = [
  {
    id: "collaboration-rooms",
    tooltipLabel: "CollaborationRooms",
    href: "/collaboration-rooms",
    icon: {
      url: iconsSprite,
    },
  },
  {
    id: "custom-rooms",
    tooltipLabel: "CustomRooms",
    href: "/custom-rooms",
    icon: {
      url: iconsSprite,
      positionX: "-72px",
    },
  },
  {
    id: "form-filling-rooms",
    tooltipLabel: "FormFillingRooms",
    href: "/form-filling-rooms",
    icon: {
      url: iconsSprite,
      positionX: "-144px",
    },
  },
  {
    id: "meeting-rooms",
    tooltipLabel: "MeetingRooms",
    href: "/office-for-zoom",
    icon: {
      url: iconsSprite,
      positionX: "-216px",
    },
  },
  {
    id: "public-rooms",
    tooltipLabel: "PublicRooms",
    href: "/public-rooms",
    icon: {
      url: iconsSprite,
      positionX: "-288px",
    },
  },
  {
    id: "document-editors",
    tooltipLabel: "DocumentEditors",
    href: "/office-suite",
    icon: {
      url: iconsSprite,
      positionX: "-360px",
    },
  },
];
