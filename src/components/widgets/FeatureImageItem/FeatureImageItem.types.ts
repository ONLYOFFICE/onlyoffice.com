import { IContentImage } from "../ContentImage";

export interface IFeatureImageItem extends IContentImage {
  heading: string;
  /** The text. */
  text: React.ReactNode;
  /** The links. */
  links?: { href: string; label: string; isExternal?: boolean }[];
}
