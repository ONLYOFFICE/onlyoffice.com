export interface IDownloadButton {
  //** The id of the download button. */
  id?: string;
  /** The class name of the download button. */
  className?: string;
  /** The variant of the download button. Default: "primary". */
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
  //** The platform the download button is for. Default: "ForWindows". */
  platform:
    | "ForWindows"
    | "ForLinux"
    | "ForMacOS"
    | "AppStore"
    | "GooglePlay"
    | "SnapStore";
  //** The URL the download button points to. */
  href: string;
  //** Specifies where to open the linked document. */
  target?: "_self" | "_blank" | "_parent" | "_top";
  //** Specifies the relationship between the current page and the linked page. */
  rel?: string;
  //** The title attribute of the download button. */
  title?: string;
  //** The icon of donwload button */
  icon?: string;
}

export interface IPlatformData {
  //** The text of the download button. */
  text?: string;
  //** The icon of the download button. */
  icon?: {
    //** The light icon of the download button. */
    light?: string;
    //** The dark icon of the download button. */
    dark?: string;
  };
}
