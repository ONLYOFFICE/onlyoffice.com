export interface IFeatureTextImage {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The title. */
  title: string;
  /** The title font size in desktop divices. Default: 24px */
  titleFontSize?: string;
  /** The title font size in tablet divices. Default: 20px */
  titleTabletFontSize?: string;
  /** The title font size in tablet divices. Default: 18px */
  titleMobileFontSize?: string;
  /** The title line height. Default: 1.33em */
  titleLineHeight?: string;
  /** The title color. Default: #333 */
  titleColor?: string;
  /** The text. */
  text: string;
  /** The text font size in tablet divices. Default: 16px */
  textTabletFontSize?: string;
  /** The text font size in mobile divices. Default: 13px */
  textMobileFontSize?: string;
  /** The text line height. Default: 1.5em */
  textLineHeight?: string;
  /** The text color. Default: #666 */
  textColor?: string;
  /** The links. */
  link?: { href: string; label: string };
  /** The image. */
  image: { url: string; url2x?: string };
  /** The text gap in desktop devices. Default: 16px*/
  textGap?: string;
  /** The text gap in tablet devices. Default: 16px */
  tabletTextGap?: string;
  /** The text gap in mobile devices. Default: 8px */
  mobileTextGap?: string;
  /** Image width */
  imageWidth?: number;
  /** Image height */
  imageHeight?: number;
  /** Text position. Default: left */
  position?: "left" | "right";
  /** The text content width. Default: 448px */
  contentWidth?: string;
  /** The gap between text content and image in desktop devices. Default: 32px */
  gap?: string;
  /** The gap between text content and image in tablet devices. Default: 24px */
  tabletGap?: string;
  /** The gap between text content and image in mobile devices. Default: 16px */
  mobileGap?: string;
}
