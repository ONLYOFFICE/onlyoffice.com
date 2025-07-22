import { IDownloadBlockButton } from "../DownloadBlock";

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
  heading: React.ReactNode;
  initialFormData: IDownloadModalData;
  formData: IDownloadModalData;
  setFormData: React.Dispatch<React.SetStateAction<IDownloadModalData>>;
  byClickedText: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmitRequest: (
    params: IDownloadModalOnSubmitRequest,
  ) => Promise<IApiResponse>;
  buttonAction: IDownloadBlockButton["withModal"];
}
