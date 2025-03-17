export interface IDownloadButton {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The visual style variant. Default: "primary". */
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  /** The platform for which the download button is intended. */
  platform:
    | "windows"
    | "linux"
    | "macos"
    | "app-store"
    | "google-play"
    | "snap-store";
  /** The URL to link to. */
  href: string;
  /** Specifies where to open the linked document. If `rel` is not provided, it will default to `"noopener noreferrer"`. */
  target?: "_self" | "_blank" | "_parent" | "_top";
  /** Specifies the relationship between the current page and the linked page. */
  rel?: string;
  /** The title attribute. */
  title?: string;
}
