import { IDownloadButton } from "@src/components/ui/DownloadButton";
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
  downloadButtons?: IDownloadButton[];
  /** The alignment. */
  alignItems?: string;
  /** The display tablet S. */
  displaytabletS?: string;
}
