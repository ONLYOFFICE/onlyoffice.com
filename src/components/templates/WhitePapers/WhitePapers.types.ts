interface ICardsProp {
  sortValue: string;
}

interface ICardItem {
  id: number;
  type: "WhitePapers" | "Datasheets";
  title: string;
  date: string;
  product: string;
  icon_position_y: string;
  download_url: string;
  id_url: string;
  displayOther?: boolean;
}

interface ICardFormProp {
  download_url: string;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  id_url: string;
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
type TFilterKey  = "CardsFiltersAll" | "WhitePapers" | "Datasheets" | string;
type TSortDateKey = "CardsSortNewestOldest" | "CardsSortOldestNewest" | string;

export type {
  ICardsProp,
  ICardItem,
  ICardFormProp,
  IFormData,
  ICheckStatus,
  TDropdownType,
  TFilterKey,
  TSortDateKey
};