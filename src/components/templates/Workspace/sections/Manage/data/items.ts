export interface ICarouselItems {
  id: string;
  title: string;
  iconUrl: string;
  text: {
    label: string;
    links?: { href: string }[];
  };
  textList: string[];
  image: {
    url: string;
    url2x: string;
    hight: number;
  };
  links: { label: string; href: string; isVideo?: boolean }[];
}

export const carouselItems: ICarouselItems[] = [
  {
    id: "documents",
    title: "Documents",
    iconUrl: "/images/templates/workspace/manage/documents.svg",
    text: {
      label: "StoreAndOrganize",
      links: [
        { href: "/document-editor?from=workspace" },
        { href: "/spreadsheet-editor?from=workspace" },
        { href: "/slides?from=workspace" },
        { href: "/pdf-editor?from=workspace" },
        { href: "/form-creator?from=workspace" },
      ],
    },
    textList: [
      "HighestCompatibility",
      "MultiFormat",
      "ReadyForms",
      "PrivateRooms",
    ],
    image: {
      url: "DocumentsImgUrl",
      url2x: "DocumentsImgUrl2x",
      hight: 422,
    },
    links: [
      { label: "LearnMore", href: "/document-management?from=workspace" },
    ],
  },
  {
    id: "mails",
    title: "Mails",
    iconUrl: "/images/templates/workspace/manage/mail.svg",
    text: {
      label: "KeepYourMailboxOrganized",
    },
    textList: [
      "SupportOfCommonEmailProtocols",
      "UnlimitedNumber",
      "FreeDefaultDomain",
    ],
    image: {
      url: "MailsImgUrl",
      url2x: "MailsImgUrl2x",
      hight: 368,
    },
    links: [{ label: "LearnMore", href: "/mail?from=workspace" }],
  },
  {
    id: "crm",
    title: "CRM",
    iconUrl: "/images/templates/workspace/manage/crm.svg",
    text: {
      label: "OrganizeYourBusinessWorkflow",
    },
    textList: ["WebToLead", "MakingCalls", "CloseIntegration"],
    image: {
      url: "CrmImgUrl",
      url2x: "CrmImgUrl2x",
      hight: 368,
    },
    links: [{ label: "LearnMore", href: "/crm?from=workspace" }],
  },
  {
    id: "projects",
    title: "Projects",
    iconUrl: "/images/templates/workspace/manage/projects.svg",
    text: {
      label: "OrganizeYourTeam",
    },
    textList: ["GanttChart", "PrivateProjects", "Integration"],
    image: {
      url: "ProjectsImgUrl",
      url2x: "ProjectsImgUrl2x",
      hight: 408,
    },
    links: [
      { label: "LearnMore", href: "/projects?from=workspace" },
      {
        label: "WatchVideo",
        href: "https://www.youtube.com/embed/ljEU6zJj9VE?si=sNV_q5IcGEu8-2vM",
        isVideo: true,
      },
    ],
  },
  {
    id: "calendar",
    title: "Calendar",
    iconUrl: "/images/templates/workspace/manage/calendar.svg",
    text: {
      label: "ManageYourTime",
    },
    textList: [
      "CalendarSharing",
      "Synchronization",
      "CloseIntegrationWithModules",
    ],
    image: {
      url: "CalendarImgUrl",
      url2x: "CalendarImgUrl2x",
      hight: 410,
    },
    links: [{ label: "LearnMore", href: "/calendar?from=workspace" }],
  },
];
