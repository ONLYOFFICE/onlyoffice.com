interface ITrainingCoursesInputProps {
  filterValue: string;
  onFilterChange: (value: string) => void;
};

interface ICardsProp {
  filterValue: ITrainingCoursesInputProps["filterValue"];
};

interface ICardsDataItemProp {
  title: string;
  icon_url: string;
  type: string;
  module: string | string[];
  sessions: string;
  hours: string;
  price: string;
  description: string;
  new?: boolean;
  course?: string;
};

interface ICardsDataItem extends ICardsDataItemProp {
  id: number;
  date: string;
};

interface ICardFormProp {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  course?: string;
}

interface IFormData {
  fullName: string;
  companyName: string;
  email: string;
  preferredLang: string;
  timeZone: string;
  commentArea: string;
  hCaptcha: string | null;
}

interface ICheckStatus {
  fullName: "default" | "success" | "error";
  companyName: "default" | "success" | "error";
  email: "default" | "success" | "error";
  hCaptcha: "default" | "success" | "error";
}

interface IPreferredLang {
  id: number;
  lang: string;
}

interface ITimeZone {
  id: number;
  time: string;
}

interface IFaqDataItem {
  id: number;
  title: string;
  description: string;
};

interface ITestimonialsItem {
  id: number;
  logo_url: string;
  text: string;
  author: string;
  company_name: string;
  company_link: string;
  country: string;
}

type TDropdownType = "filter" | "module" | "date" | null;
type TFilterKey  = "CardsFiltersAll" | "WhitePapers" | "Datasheets" | string;
type TSortDateKey = "CardsSortNewestOldest" | "CardsSortOldestNewest" | string;

export type {
  ITrainingCoursesInputProps,
  ICardsProp,
  ICardsDataItemProp,
  ICardsDataItem,
  ICardFormProp,
  IFormData,
  ICheckStatus,
  IPreferredLang,
  ITimeZone,
  IFaqDataItem,
  ITestimonialsItem,
  TDropdownType,
  TFilterKey,
  TSortDateKey,
}