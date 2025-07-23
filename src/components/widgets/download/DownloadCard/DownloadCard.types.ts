import { ILocale } from "@src/types/locale";

interface IDownloadCardImage {
  url: string;
  positionX?: string;
  positionY?: string;
  size?: string;
}

export interface IDownloadCardButton {
  id: string;
  label: string;
  link?: {
    href: string;
    isExternal?: boolean;
    download?: boolean;
  };
  withModal?: {
    href?: string;
    isExternal?: boolean;
    download?: boolean;
  };
  onClick?: () => void;
}

interface IDownloadCardBuyButton {
  id: string;
  href: string;
  isExternal?: boolean;
}

export interface IDownloadCard {
  nameKey?: string | string[];
  locale?: ILocale["locale"];
  heading: string;
  recomended?: boolean;
  image: IDownloadCardImage;
  version?: string;
  fileSize?: {
    primary: string;
    secondary?: string;
    unit: "KB" | "MB";
  };
  releaseDate?: string;
  license?: string;
  whatsNewLink?: string;
  readInstructionLink?: string;
  sourceCodeOnGithubLink?: string;
  buttons: IDownloadCardButton[];
  buyButton?: IDownloadCardBuyButton;
}
