interface ITableItem {
  feature: string;
  basic: boolean;
  basicPlus: boolean;
  pro: boolean;
}

export const headers = ["Features", "Basic", "BasicPlus", "Pro"];

export const tableItems: ITableItem[] = [
  {
    feature: "VideoInstructions",
    basic: true,
    basicPlus: true,
    pro: true,
  },
  {
    feature: "Quizzes",
    basic: true,
    basicPlus: true,
    pro: true,
  },
  {
    feature: "PracticalTasks",
    basic: true,
    basicPlus: true,
    pro: true,
  },
  {
    feature: "AdditionalResources",
    basic: true,
    basicPlus: true,
    pro: true,
  },
  {
    feature: "ExpertDiscussions",
    basic: false,
    basicPlus: true,
    pro: true,
  },
  {
    feature: "LiveTutorLedSessions",
    basic: false,
    basicPlus: false,
    pro: true,
  },
  {
    feature: "Certificate",
    basic: true,
    basicPlus: true,
    pro: true,
  },
];
