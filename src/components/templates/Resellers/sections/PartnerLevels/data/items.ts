interface IISupportLevelsHead {
  name?: string;
}

interface ISupportLevelsBody {
  heading: { name: string }[];
  values: {
    name?: string;
    icon?: "check" | "dash";
  }[];
}

interface ISupportLevels {
  head: IISupportLevelsHead[];
  body: ISupportLevelsBody[];
}

export const supportLevels: ISupportLevels = {
  head: [{}, { name: "Authorized" }, { name: "Silver" }, { name: "Gold" }],
  body: [
    {
      heading: [{ name: "TechnicalSupport" }],
      values: [{ name: "Basic" }, { name: "Plus" }, { name: "Plus" }],
    },
    {
      heading: [{ name: "DealRegistration" }],
      values: [{ name: "+3%" }, { name: "+3%" }, { name: "+3%" }],
    },
    {
      heading: [{ name: "Trainings" }],
      values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
    },
    {
      heading: [{ name: "NFRLicense" }],
      values: [{ icon: "dash" }, { icon: "check" }, { icon: "check" }],
    },
    {
      heading: [{ name: "PossibleMarketingExpensesShare" }],
      values: [{ icon: "dash" }, { icon: "dash" }, { icon: "check" }],
    },
  ],
};
