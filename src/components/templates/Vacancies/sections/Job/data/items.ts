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
  {
    id: 2,
    department: {
      color: "red",
      label: "JobCardDepartmentSales"
    },
    title: "JobCard2Title",
    location: "JobCardLocationRemote",
    time: "JobCardTimeFullTime",
    language: {
      icon: ["/images/templates/vacancies/job/gb.svg", "/images/templates/vacancies/job/fr.svg"],
      label: "JobCardLanguageEnFr",
    },
    description: "JobCard2Description",
    requirements: "JobCard2Requirements",
    skills: "JobCard2Skills",
    benefits: "JobCard2Benefits",
  },
];

export { items };