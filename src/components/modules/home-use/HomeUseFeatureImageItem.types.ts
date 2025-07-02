import { IContentImage } from "../../widgets/ContentImage";

export interface IHomeUseFeatureImageItem extends IContentImage {
  /** The heading. */
  heading: React.ReactNode;
  /** The text. */
  text: string;
  /** The links. */
  links?: { href: string; label: string; isExternal?: boolean }[];
  /** Client logos. */
  logos?: { url: string; width: number; height: number }[];
  /** The list items. */
  items: { label: string | React.ReactNode }[];
  /** The buttons. */
  buttons?: { href: string; label: string; className?: string }[];
  /** The download buttons. */
  downloadButtons?: {
    href: string;
    label: string;
    platform: "google-play" | "app-store" | "windows" | "linux" | "macos" | "snap-store";
    variant: "secondary" | "primary";
    imageSrc: string;
  }[];
  /** The alignment. */
  alignItems?: string;
  /** The margin top. */
  marginTop?: string;
  /** The display tablet S. */
  displaytabletS?: string;
}
