import { IContentImage } from "../ContentImage";

export interface IFeatureIconsItemButton {
  label: string;       
  href?: string;
  isExternal?: boolean;
  isPrimary?: boolean;
  isLink?: boolean;
  isServer?: boolean;

    links?: {
    href: string;
    isExternal?: boolean;
  }[];
}

export interface IFeatureIconsItemTextItem {
  label: string; 
  links?: {
    href: string;
    label: string;
    isExternal?: boolean;
  }[];
}

export interface IFeatureIconsItemQuote {
  icon?: string;
  text: string;
  author: string;
  info: string;
  link?: {
    href: string;
    label: string;
    isExternal?: boolean;
  };
}

export interface IFeatureIconsItem extends IContentImage {
  heading?: string;
  links?: { href: string; label: string; isExternal?: boolean }[];
  items?: string[];
  text: IFeatureIconsItemTextItem[];

  textWithLinks?: IFeatureIconsItemTextItem[];

  connectorsItems?: {
    image: {
      url: string;
      width: number;
      height: number;
      positionX?: string;
      positionY?: string;
    };
    label: string;
  }[];

  connectorsHeading?: string;
  connectorsSubheading?: string;

  buttons?: IFeatureIconsItemButton[];
  showButtonsOutside?: boolean; 
  quote?: IFeatureIconsItemQuote;
}