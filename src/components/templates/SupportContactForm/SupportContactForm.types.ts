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
  hcaptcha: string | null;
}

interface ICheckStatus {
  name: "default" | "success" | "error";
  email: "default" | "success" | "error";
}

export type {
  ISelectSubjectItems,
  IFormData,
  ICheckStatus
};
