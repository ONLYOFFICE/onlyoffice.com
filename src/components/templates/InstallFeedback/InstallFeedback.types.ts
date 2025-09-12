interface IFormItems {
  label: string;
  value: string;
}

interface IFormData {
  operatingSystem: string;
  countsOfUsers: string;
  whoIsResponsible: string;
  modules: {
    documents: boolean;
    crm: boolean;
    community: boolean;
    calendar: boolean;
    projects: boolean;
    people: boolean;
    mail: boolean;
  };
  issues: string;
  intuitiveAndSimple: string;
  degreeVersionMeet: string;
  planToUse: string;
  comments: string;
  captchaToken: string | null;
}

interface IQuestionBlockProps {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  items: IFormItems[];
  name: keyof IFormData;
  heading: string;
  columns?: 2 | 3;
  isCheckBoxBlock?: boolean;
}

export type { IFormItems, IFormData, IQuestionBlockProps };
