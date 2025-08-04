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
}

export type { ISelectSubjectItems };
