interface ISelectSubjectItems {
  option: string;
  value: string;
  data?: {
    option?: string;
    title?: string;
    value: string;
    subData?: {
      option: string;
      value: string;
    }[];
  }[];
};

interface IFormData {
  product: string;
  subject: string;
  specifyOfOther: string;
  paidLicense: boolean;
  description: string;
  files: File[];
  name: string;
  email: string;
  hcaptcha: null;
}

export type {
  ISelectSubjectItems,
  IFormData
};
