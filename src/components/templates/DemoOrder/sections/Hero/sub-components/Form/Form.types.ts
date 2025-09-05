interface IFormData {
    fullName: string;
    email: string;
    phone: string;
    website: string;
    companyName: string;
    date: string;
    time: string;
    timeZoneOffset: string;
    lang: string;
    module: string;
    note: string;
    hcaptcha: string | null;
    spam: boolean;
  }
  
export type {
    IFormData,
  };