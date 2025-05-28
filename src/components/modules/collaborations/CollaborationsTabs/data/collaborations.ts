interface ICollaborationsTab {
  /** The unique identifier. */
  id: string;
  /** The tab href */
  url: string;
  /** The tab label */
  label: string;
}

export const collaborations: ICollaborationsTab[] = [
  {
    id: "document-management-link",
    url: "/document-management",
    label: "DocumentManagement",
  },
  {
    id: "mail-link",
    url: "/mail",
    label: "Mail",
  },
  {
    id: "crm-link",
    url: "/crm",
    label: "Crm",
  },
  {
    id: "projects-link",
    url: "/projects",
    label: "Projects",
  },
  {
    id: "calendar-link",
    url: "/calendar",
    label: "Calendar",
  },
    {
    id: "community-link",
    url: "/community",
    label: "Community",
  },
];
