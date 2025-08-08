import { IFormItems } from "../../../InstallFeedback.types";

const operatingSystemItems: IFormItems[] = [
  {
    label: "Microsoft Windows Vista SP2",
    value: "Microsoft Windows Vista SP2",
  },
  {
    label: "Microsoft Windows 7",
    value: "Microsoft Windows 7",
  },
  {
    label: "Microsoft Windows 8",
    value: "Microsoft Windows 8",
  },
  {
    label: "Microsoft Windows 8.1",
    value: "Microsoft Windows 8.1",
  },
  {
    label: "Microsoft Windows Server 2008(R2)",
    value: "Microsoft Windows Server 2008(R2)",
  },
  {
    label: "Microsoft Windows Server 2012(R2)",
    value: "Microsoft Windows Server 2012(R2)",
  },
];

const countsOfUsersItems: IFormItems[] = [
  { label: "1-30", value: "1-30" },
  { label: "31-45", value: "31-45" },
  { label: "46-70", value: "46-70" },
  { label: "71-100", value: "71-100" },
  { label: "101", value: "101 or more" },
];

const moduleItems: IFormItems[] = [
  { label: "Documents", value: "documents" },
  { label: "CRM", value: "crm" },
  { label: "Community", value: "community" },
  { label: "Calendar", value: "calendar" },
  { label: "Projects", value: "projects" },
  { label: "People", value: "people" },
  { label: "Mail", value: "mail" },
];

const issuesItems: IFormItems[] = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

const intuitiveAndSimpleItems: IFormItems[] = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
  { label: "NotSure", value: "Not sure" },
];

const degreeVersionMeetItems: IFormItems[] = [
  { label: "MeetAbsolutely", value: "Meet absolutely" },
  { label: "MeetSomewhat", value: "Meet somewhat" },
  { label: "DoNotMeet", value: "Do not meet" },
];

const planToUseItems: IFormItems[] = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
  { label: "Probably", value: "Probably" },
];

export {
  operatingSystemItems,
  countsOfUsersItems,
  moduleItems,
  issuesItems,
  intuitiveAndSimpleItems,
  degreeVersionMeetItems,
  planToUseItems,
};