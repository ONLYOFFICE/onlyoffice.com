import { IJobItem } from "../../../Vacancies.types";

const items: IJobItem[] = [
  {
    id: 1,
    department: {
      color: "red",
      label: "JobCardDepartmentSales"
    },
    title: "JobCard1Title",
    location: "JobCardLocationRemote",
    time: "JobCardTimeFullTime",
    language: {
      icon: ["/images/templates/vacancies/job/gb.svg", "/images/templates/vacancies/job/de.svg"],
      label: "JobCardLanguageEnDe",
    },
    description: "JobCard1Description",
    requirements: "JobCard1Requirements",
    skills: "JobCard1Skills",
    benefits: "JobCard1Benefits",
  },
];

export { items };