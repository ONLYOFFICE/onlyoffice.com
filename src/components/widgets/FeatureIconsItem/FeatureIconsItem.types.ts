import { IContentImage } from "../ContentImage";

export interface IFeatureIconsItemButton {
  label: string;       
  href: string;
  isExternal?: boolean;
  isPrimary?: boolean;
}

export interface IFeatureIconsItemTextItem {
  label: string; 
  links?: {
    href: string;
    label: string;
    isExternal?: boolean;
  }[];
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
    };
    label: string;
  }[];

  connectorsHeading?: string;
  connectorsSubheading?: string;

  buttons?: IFeatureIconsItemButton[];
}