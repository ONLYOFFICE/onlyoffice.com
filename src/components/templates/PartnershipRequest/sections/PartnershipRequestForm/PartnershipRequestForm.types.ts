export interface IDownloadModalOnSubmitRequest {
  from?: string;
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
  comment: string;
  type: string;
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
