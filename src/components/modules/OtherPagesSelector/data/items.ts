import { IPage } from "../OtherPagesSelector.types";

export const editors: IPage[] = [
  {
    id: "document_editor",
    name: "DocumentEditor",
    url: "/document-editor",
  },
  {
    id: "spreadsheet_editor",
    name: "SpreadsheetEditor",
    url: "/spreadsheet-editor",
  },
  {
    id: "presentation_editor",
    name: "PresentationEditor",
    url: "/presentation-editor",
  },
  {
    id: "form_creator",
    name: "FormCreator",
    url: "/form-creator",
  },
  {
    id: "pdf_editor",
    name: "PDFEditor",
    url: "/pdf-editor",
  },
  {
    id: "ebook_creator",
    name: "EBookCreator",
    url: "/e-book",
  },
  {
    id: "diagram_viewer",
    name: "DiagramViewer",
    url: "/diagram-viewer",
  },
];

export const collaborations: IPage[] = [
  {
    id: "document-management-link",
    name: "DocumentManagement",
    url: "/document-management",
  },
  {
    id: "mail-link",
    name: "Mail",
    url: "/mail",
  },
  {
    id: "crm-link",
    name: "Crm",
    url: "/crm",
  },
  {
    id: "projects-link",
    name: "Projects",
    url: "/projects",
  },
  {
    id: "calendar-link",
    name: "Calendar",
    url: "/calendar",
  },
    {
    id: "community-link",
    name: "Community",
    url: "/community",
  },
];

export const rooms: IPage[] = [
  {
    id: "collaboration-rooms-link",
    name: "CollaborationRooms",
    url: "/collaboration-rooms",
  },
  {
    id: "public-rooms-link",
    name: "PublicRooms",
    url: "/public-rooms",
  },
  {
    id: "custom-rooms-link",
    name: "CustomRooms",
    url: "/custom-rooms",
  },
  {
    id: "form-filling-rooms-link",
    name: "FormFillingRooms",
    url: "/form-filling-rooms",
  },
  {
    id: "zoom-meeting-rooms-link",
    name: "ZoomMeetingRooms",
    url: "/office-for-zoom",
  },
  {
    id: "virtual-data-rooms-link",
    name: "VirtualDataRooms",
    url: "/virtual-data-rooms",
  },
];
