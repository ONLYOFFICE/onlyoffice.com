export interface IDownloadButton {
  id?: string;
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
  platform:
    | "ForWindows"
    | "ForLinux"
    | "ForMacOS"
    | "AppStore"
    | "GooglePlay"
    | "SnapStore";
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}
