interface ITrainingCoursesInputProps {
  filterValue: string;
  onFilterChange: (value: string) => void;
};

interface ICardsDataItem {
  id: number;
  title: string;
  date: string;
  img_class: string;
  type: string;
  module: string | string[];
  sessions: string;
  hours: string;
  price: string;
  description: string;
  new?: "new",
};

interface IFaqDataItem {
  id: number;
  title: string;
  description: string;
};

export type {
  ITrainingCoursesInputProps,
  ICardsDataItem,
  IFaqDataItem,
}