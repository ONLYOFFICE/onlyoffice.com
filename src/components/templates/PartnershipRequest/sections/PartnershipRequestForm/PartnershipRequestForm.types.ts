export interface IDownloadModalOnSubmitRequest {
  from?: string;
  country: string;
  region: string;
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
  comment: string;
  buttonId: string;
  type: string;
}

interface IApiResponse {
  status: string | number;
  message: { code?: string; Message?: string };
}

export interface IDownloadModal {
  locale: string;
  initialFormData: IPartnershipRequestData;
  formData: IPartnershipRequestData;
  setFormData: React.Dispatch<React.SetStateAction<IPartnershipRequestData>>;
  byClickingText: React.ReactNode;
  onSubmitRequest: (
    params: IDownloadModalOnSubmitRequest,
  ) => Promise<IApiResponse>;
}
