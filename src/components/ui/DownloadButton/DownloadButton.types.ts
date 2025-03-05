export type ButtonVariant =
  | "outline-light-text"
  | "outline-dark-text"
  | "dark"
  | "light";
export type Platform =
  | "ForWindows"
  | "ForLinux"
  | "ForMacOS"
  | "AppStore"
  | "GooglePlay"
  | "SnapStore";

export interface IDownloadButton {
  variant: ButtonVariant;
  platform: Platform;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}
