export interface IDownloadModalOnSubmitRequest {
  from?: string;
  country: string;
  region: string;
}

export interface IDownloadModalData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
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
  initialFormData: IDownloadModalData;
  formData: IDownloadModalData;
  setFormData: React.Dispatch<React.SetStateAction<IDownloadModalData>>;
  byClickingText: React.ReactNode;
  onSubmitRequest: (
    params: IDownloadModalOnSubmitRequest,
  ) => Promise<IApiResponse>;
}
