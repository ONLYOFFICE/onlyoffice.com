interface IRoomsTab {
  /** The unique identifier. */
  id: string;
  /** The tab href */
  url: string;
  /** The tab label */
  label: string;
}

export const rooms: IRoomsTab[] = [
  {
    id: "collaboration-rooms-link",
    url: "/collaboration-rooms",
    label: "CollaborationRooms",
  },
  {
    id: "public-rooms-link",
    url: "/public-rooms",
    label: "PublicRooms",
  },
  {
    id: "custom-rooms-link",
    url: "/custom-rooms",
    label: "CustomRooms",
  },
  {
    id: "form-filling-rooms-link",
    url: "/form-filling-rooms",
    label: "FormFillingRooms",
  },
  {
    id: "zoom-meeting-rooms-link",
    url: "/office-for-zoom",
    label: "ZoomMeetingRooms",
  },
  {
    id: "virtual-data-rooms-link",
    url: "/virtual-data-rooms",
    label: "VirtualDataRooms",
  },
];
