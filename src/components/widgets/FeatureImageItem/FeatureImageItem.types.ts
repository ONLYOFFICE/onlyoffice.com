import { IContentImage } from "../ContentImage";

export interface IFeatureImageItem extends IContentImage {
  heading: string;
  /** The text. */
  text: React.ReactNode;
  fontSize?: string;
  /** The row gap between the text content and the image, specified per breakpoint in pixels. */
  rowGap?: number;
  /** The links. */
  links?: { href: string; label: string; isExternal?: boolean }[];
  /** The margin-top. */
  marginTop?: {
    /** Default: 32 */
    desktop?: number;
    tablet?: number;
    /** Default: 24 */
    tabletS?: number;
    /** Default: 16 */
    mobile?: number;
  };
}
