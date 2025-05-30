import { ILocale } from "@src/types/locale";

export interface IQuoteModalFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  hCaptcha: string | null;
}

export interface IQuoteModalApiRequest {
  from?: string;
  utmSource?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

export interface IQuoteModalSendEmailRequest {
  from?: string;
  errorFlag: string;
  utmCampaignFlag: string;
  errorText: string;
  isSelected: (value: boolean) => "Selected" | "Not selected";
}

export interface IQuoteModalPipedriveRequest {
  _ga?: string;
  utmSource?: string;
  utmCampaign?: string;
  title: string;
  region: string;
  from?: string;
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
  apiRequest: (params: IQuoteModalApiRequest) => Promise<IApiResponse>;
  sendEmailRequest: (
    params: IQuoteModalSendEmailRequest,
  ) => Promise<IApiResponse>;
  pipedriveRequest: (params: IQuoteModalPipedriveRequest) => void;
  onClose: () => void;
}
