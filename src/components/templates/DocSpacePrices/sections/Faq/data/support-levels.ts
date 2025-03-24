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
  head: [{}, { name: "Standard" }, { name: "Plus" }, { name: "Premium" }],
  body: [
    {
      heading: [{ name: "FirstResponseTime" }],
      values: [
        { name: "48DuringWorkingHours" },
        { name: "24DuringWorkingHours" },
        { name: "12DuringWorkingHours" },
      ],
    },
    {
      heading: [{ name: "StandardInstallation" }],
      values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
    },
    {
      heading: [{ name: "PrimaryConfiguration" }],
      values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
    },
    {
      heading: [{ name: "Migration" }],
      values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
    },
    {
      heading: [{ name: "UpdatesInstallation" }],
      values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
    },
    {
      heading: [{ name: "IntegrationOfEditors" }],
      values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
    },
    {
      heading: [{ name: "Consulting" }],
      values: [{ icon: "check" }, { icon: "check" }, { icon: "check" }],
    },
    {
      heading: [{ name: "Branding*" }],
      values: [{ icon: "dash" }, { icon: "dash" }, { icon: "check" }],
    },
    {
      heading: [{ name: "Monitoring system" }],
      values: [{ icon: "dash" }, { icon: "dash" }, { icon: "check" }],
    },
    {
      heading: [{ name: "Clustering**" }],
      values: [{ icon: "dash" }, { icon: "dash" }, { icon: "check" }],
    },
  ],
};
