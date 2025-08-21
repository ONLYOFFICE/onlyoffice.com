import { IContentImage } from "../ContentImage";

export interface IFeatureImageItem extends IContentImage {
  /** The heading. */
  heading: string | React.ReactNode;
  /** The coming soon. */
  comingSoon?: string;
  /** The text. */
  text: React.ReactNode;
  /** The font size. */
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
