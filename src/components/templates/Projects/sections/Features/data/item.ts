interface ICollaborationsFeatures {
  image: { src: string; alt: string };
  heading: string;
  text: string;
}

export const features: ICollaborationsFeatures[] = [
  {
    image: { src: "ProjectHierarchyImage", alt: "ProjectHierarchy" },
    heading: "ProjectHierarchy",
    text: "ProjectHierarchyText",
  },
  {
    image: { src: "GanttChartImage", alt: "GanttChart" },
    heading: "GanttChart",
    text: "GanttChartText",
  },
  {
    image: { src: "AccessRightsImage", alt: "AccessRights" },
    heading: "AccessRights",
    text: "AccessRightsText",
  },
  {
    image: { src: "TimeManagementImage", alt: "TimeManagement" },
    heading: "TimeManagement",
    text: "TimeManagementText",
  },
];
