export interface IApiIcon {
  row: IApiIconRow[];
}

export interface IApiIconRow {
  label: string;
  iconPosX: number;
  width?: string;
  widthMobile?: string;
  widthTablet?: string;
  minWidth?: string;
  minWidthTablet?: string;
  minWidthMobile?: string;
}

export interface IFormats {
    heading: string;
    icons: {
        label: string; 
        url: string;
    }[];
}

export interface IItemsTab {
    heading: string;
    text: string;
    iconPositionX: number;
    code?: string;
    href: string;
    apiIcons: IApiIcon[];
    apiLinks: boolean;
}

export interface ICodeBlockProps {
  code: string;
  docHref: string;
  docLabel: string;
  language?: string;
}