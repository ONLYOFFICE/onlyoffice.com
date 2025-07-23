import { ILocale } from "@src/types/locale";

interface IDownloadBlockImage {
  url: string;
  positionX?: string;
  positionY?: string;
  mobilePositionX?: string;
  mobilePositionY?: string;
  background?: string;
  size?: string;
  width?: string;
  height?: string;
  mobileWidth?: string;
  mobileHeight?: string;
}

export interface IDownloadBlockButton {
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

interface IDownloadBlockBuyButton {
  id: string;
  href: string;
  isExternal?: boolean;
}

export interface IDownloadBlock {
  nameKey?: string | string[];
  locale?: ILocale["locale"];
  heading: string;
  image: IDownloadBlockImage;
  version: string;
  releaseDate: string;
  license?: string;
  whatsNewLink?: string;
  sourceCodeOnGithubLink?: string;
  readInstructionLink?: string;
  buttons: IDownloadBlockButton[];
  buyButton?: IDownloadBlockBuyButton;
}
