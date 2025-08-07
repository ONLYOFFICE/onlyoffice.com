import { IContentImage } from "@src/components/widgets/ContentImage";

export interface IFeatureImgLinkBtnItem extends IContentImage {
  /** The heading. */
  heading: string;
  /** The paragraph after heading. */
  postheading: string;
  /** The text. */
  text: React.ReactNode;
  /** Hero button. */
  button: { id?: string; label: string; href: string };
  /** The link. */
  link: { href: string; label: string; isExternal?: boolean };
}
