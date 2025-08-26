export interface IGettingStarted {
    title: string;

    text: {
        heading: string;
        textLinks?: {

            url: string;
            
            isExternal?: boolean;
    }[];
    }[]

    btnTitle: string;

    btnSubTitle: string;

    btnText: string;
}

export interface IFormData {
  fullName: string;
  companyName: string;
  email: string;
  hCaptcha: string | null;
}

export interface ICheckStatus {
  fullName: "default" | "success" | "error";
  companyName: "default" | "success" | "error";
  email: "default" | "success" | "error";
  hCaptcha: "default" | "success" | "error";
}

export interface ICardFormProp {
  download_url: string;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  product?: string;
}

export interface ICardDatasheetsItemsProps {
  download_url: string;
}