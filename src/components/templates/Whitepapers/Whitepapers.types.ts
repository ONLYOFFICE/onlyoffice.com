interface ICardsProp {
  sortValue: string;
}

interface ICardWhitepapersItemsProps {
  head: string;
  title: string;
  date: string;
  download_url: string,
  description: string;
}

interface ICardWhitepapersItems extends ICardWhitepapersItemsProps {
  id: number;
}

interface ICardDatasheetsItemsProps {
  title: string;
  product: string;
  image_url: string;
  download_url: string;
  displayOther?: boolean;
}

interface ICardDatasheetsItems extends ICardDatasheetsItemsProps {
  id: number;
  date: string;
}

interface ICardFormProp {
  download_url: string;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  product?: string;
}

interface IFormData {
  fullName: string;
  companyName: string;
  email: string;
  hCaptcha: string | null;
}

interface ICheckStatus {
  fullName: "default" | "success" | "error";
  companyName: "default" | "success" | "error";
  email: "default" | "success" | "error";
  hCaptcha: "default" | "success" | "error";
}

type TDropdownType = "filter" | "module" | "date" | null;
type TFilterKey  = "CardsFiltersAll" | "CardsHeadingWhitepapers" | "CardsHeadingDatasheets" | string;
type TSortDateKey = "CardsSortNewestOldest" | "CardsSortOldestNewest" | string;

export type {
  ICardsProp,
  ICardWhitepapersItems,
  ICardWhitepapersItemsProps,
  ICardDatasheetsItems,
  ICardDatasheetsItemsProps,
  ICardFormProp,
  IFormData,
  ICheckStatus,
  TDropdownType,
  TFilterKey,
  TSortDateKey
};