interface IFormItems {
  label: string;
  value: string;
}

interface IFormData {
  operatingSystem: string;
  countsOfUsers: string;
  module: string;
  issues: string;
  intuitiveAndSimple: string;
  degreeVersionMeet: string;
  planToUse: string;
}

interface IQuestionBlockProps {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  items: IFormItems[];
  name: keyof IFormData;
  heading: string;
  columns?: 2 | 3;
}

export type {
  IFormItems,
  IFormData,
  IQuestionBlockProps,
}