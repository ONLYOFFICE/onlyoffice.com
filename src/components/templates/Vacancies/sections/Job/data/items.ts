import { IJobItem } from "../../../Vacancies.types";

const items: IJobItem[] = [
  {
    id: 1,
    department: {
      color: "red",
      label: "JobCardDepartmentSales"
    },
    title: "Account manager Germany",
    description: "We are looking for a customer-focused, revenue-driven Account Manager to create long-term, trusting relationships with our customers in Germany.",
  },
  {
    id: 2,
    department: {
      color: "blue",
      label: "JobCardDepartmentMarketing"
    },
    title: "Technical writer Serbia",
    description: "We are looking for a technical writer to contribute to the main company product.",
  },
  {
    id: 3,
    department: {
      color: "green",
      label: "JobCardDepartmentCustomerCare"
    },
    title: "Customer care manager Armenia",
    description: "We are looking for an experienced Customer Care Manager to join our international team. You will be responsible for customer onboarding processes as well as managing relationship with ONLYOFFICE customers.",
  },
];

export { items };