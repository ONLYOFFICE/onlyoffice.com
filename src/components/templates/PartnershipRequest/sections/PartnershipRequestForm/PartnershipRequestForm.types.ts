export interface IDownloadModalOnSubmitRequest {
  from?: string;
  hCaptchaResponse: string;
}

export interface IPartnershipRequestData {
  firstName: string;
  lastName: string;
  positionTitle: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  numberEmployees: string;
  government: boolean;
  education: boolean;
  commerce: boolean;
  fortune500: boolean;
  smes: boolean;
  industry: boolean;
  otherSegments: boolean;
  currentlyPartner: boolean;
  pleaseSpecify: string;
  salesOpportunities: boolean;
  websitePromote: boolean;
  socialNetworks: boolean;
  conferencesAndEvents: boolean;
  publications: boolean;
  personalSelling: boolean;
  onlineAdvertising: boolean;
  printAdvertising: boolean;
  videoAdvertising: boolean;
  tvAndRadioAdvertising: boolean;
  packaging: boolean;
  otherPromote: boolean;
  demoPortal: boolean;
  productTraining: boolean;
  salesTraining: boolean;
  article: boolean;
  conference: boolean;
  partner: boolean;
  customer: boolean;
  otherInfoSource: boolean;
  comment: string;
  spam: boolean;

  [key: string]: string | boolean;
}

interface IApiResponse {
  status: string | number;
  message: { code?: string; Message?: string };
}

export interface IPartnRequestForm {
  locale: string;
  initialFormData: IPartnershipRequestData;
  formData: IPartnershipRequestData;
  setFormData: React.Dispatch<React.SetStateAction<IPartnershipRequestData>>;
  byClickingText: React.ReactNode;
  onSubmitRequest: (
    params: IDownloadModalOnSubmitRequest,
  ) => Promise<IApiResponse>;
}
