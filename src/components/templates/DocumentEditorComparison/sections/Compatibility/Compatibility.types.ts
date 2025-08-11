export interface ICompatibilityCompany {
  name:
    | "onlyoffice"
    | "ms-office"
    | "google-docs"
    | "zoho"
    | "libreoffice"
    | "wps"
    | "hancom";
  img: {
    src: string;
    width?: string;
  };
  text: string;
}

export interface ICompatibility {
  company: ICompatibilityCompany["name"];
  isDocx: boolean;
  src: string;
}
