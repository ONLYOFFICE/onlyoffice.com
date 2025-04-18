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
  head: [{}, { name: "Basic" }, { name: "Plus" }, { name: "Premium" }],
  body: [
    {
      heading: [{ name: "NumberOfRequestsIncluded" }],
      values: [{ name: "5" }, { name: "10" }, { name: "20" }],
    },
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
      heading: [{ name: "MonitoringSystem" }],
      values: [{ icon: "dash" }, { icon: "dash" }, { icon: "check" }],
    },
    {
      heading: [{ name: "Clustering*" }],
      values: [{ icon: "dash" }, { icon: "dash" }, { icon: "check" }],
    },
    {
      heading: [{ name: "RemoteSessions" }],
      values: [{ icon: "dash" }, { icon: "dash" }, { icon: "check" }],
    },
    {
      heading: [{ name: "AccountEngineer" }],
      values: [{ icon: "dash" }, { icon: "dash" }, { icon: "check" }],
    },
    {
      heading: [{ name: "PhoneSupport" }],
      values: [{ icon: "dash" }, { icon: "dash" }, { icon: "check" }],
    },
  ],
};
