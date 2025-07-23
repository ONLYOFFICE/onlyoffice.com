import { ILocale } from "@src/types/locale";

export interface IQuoteModalFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  hCaptcha: string | null;
}

export interface IQuoteModalOnSubmitRequest {
  from?: string;
  country: string;
  region: string;
}

interface IApiResponse {
  status: string;
  message: { code?: string };
}

export interface IQuoteModal<T> {
  locale?: ILocale["locale"];
  isOpen: boolean;
  heading: string;
  byClickedText: React.ReactNode;
  initialFormData: T;
  initialQuoteFormData: IQuoteModalFormData;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
  quoteFormData: IQuoteModalFormData;
  setQuoteFormData: React.Dispatch<React.SetStateAction<IQuoteModalFormData>>;
  buttonLabel: string;
  onSubmitRequest: (
    params: IQuoteModalOnSubmitRequest,
  ) => Promise<IApiResponse>;
  onClose: () => void;
}
