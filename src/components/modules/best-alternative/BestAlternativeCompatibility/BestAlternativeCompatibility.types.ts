export interface ICompatibilityItem {
  type:
    | "onlyOfficeDocx"
    | "onlyOfficeXlsx"
    | "alternativeDocx"
    | "alternativeXlsx";
  src: string;
}

export interface ICompatibilityAlternative {
  label: string;
  logo: { src: string; width?: string };
}

export interface IBestAlternativeCompatibility {
  alternative: ICompatibilityAlternative;
  items: ICompatibilityItem[];
  details?: React.ReactNode;
}
