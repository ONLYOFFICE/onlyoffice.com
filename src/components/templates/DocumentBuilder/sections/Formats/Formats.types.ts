export interface IApiIcon {
  label: string;
  iconPosX: number;
  width: number;
  paddingLeft: number;
  leftIcon?: number;
  widthDesktop?: number;
  leftIconDesktop?: number;
  widthTablet?: number;
  paddingLeftTablet?: number;
  leftIconTablet?: number;
  iconPosXTablet?: number;
  paddingLeftMobile?: number;
  iconPosXMobile?: number;
  leftIconMobile?: number;
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