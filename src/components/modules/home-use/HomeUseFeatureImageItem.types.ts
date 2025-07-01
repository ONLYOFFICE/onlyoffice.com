import { IContentImage } from "../../widgets/ContentImage";

export interface IFeatureImageItem extends IContentImage {
  /** The heading. */
  heading: {};
  /** The text. */
  text: React.ReactNode;
  /** The links. */
  links?: { href: string; label: string; isExternal?: boolean }[];
  /** Client logos. */
  logos?: { url: string; width: string | number; height: string | number }[];
  /** The list items. */
  items: { label: string }[];
  /** The buttons. */
  buttons?: { href: string; label: string; className?: string }[];
  /** The download buttons. */
  downloadButtons?: { href: string; label: string, platform: string, variant: string, imageSrc: string }[];
  /** The alignment. */
  alignItems?: string;
}
