interface ITrainingCoursesInputProps {
  filterValue: string;
  onFilterChange: (value: string) => void;
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
  new?: boolean,
};

interface ICardsDataItem extends ICardsDataItemProp {
  id: number;
  date: string;
};

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
  ICardsDataItemProp,
  ICardsDataItem,
  IFaqDataItem,
  ITestimonialsItem,
  TDropdownType,
  TFilterKey,
  TSortDateKey,
}