import { ILocale } from "@src/types/locale";
import { IQuoteModalApiRequest, IQuoteModalPipedriveRequest, IQuoteModalSendEmailRequest } from "./QuoteModal";

export interface IQuoteModalFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  hCaptcha: string | null;
  utmSource?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

export interface IQuoteModalOnSubmitRequest {
  from?: string;
  country: string;
  region: string;
  utmSource?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  _ga?: string;
  title?: string;
  errorFlag?: boolean;
  utmCampaignFlag?: boolean;
  errorText?: string;
}

export interface IApiResponse {
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
  onSubmitRequest?: (
    params: IQuoteModalOnSubmitRequest,
  ) => Promise<IApiResponse>;
  apiRequest?: (params: IQuoteModalApiRequest) => Promise<IApiResponse>;
  sendEmailRequest?: (params: IQuoteModalSendEmailRequest) => Promise<IApiResponse>;
  pipedriveRequest?: (params: IQuoteModalPipedriveRequest) => Promise<IApiResponse>;
  onClose: () => void;
}
