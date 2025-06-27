export interface IContentImage {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The text or components to display alongside the image. */
  children?: React.ReactNode;
  /** The maximum width (in pixels) for the text content area. Default: 448 */
  contentWidth?: number;
  /** The image configuration. */
  image: {
    /** The URL of the image (1x resolution). */
    url: string;
    /** The URL of the high-resolution (2x) image. */
    url2x?: string;
    /** The display width of the image in pixels. Default: 640 */
    width?: number;
    /** The display height of the image in pixels. Default: 504 */
    height?: number;
  };
  /** The space (gap) between the text content and the image, specified per breakpoint in pixels. */
  gap?: {
    /** Default: 32 */
    desktop?: number;
    tablet?: number;
    /** Default: 24 */
    tabletS?: number;
    /** Default: 16 */
    mobile?: number;
  };
  marginTop?: {
    /** Default: 32 */
    desktop?: number;
    tablet?: number;
    /** Default: 24 */
    tabletS?: number;
    /** Default: 16 */
    mobile?: number;
  };
  /** The text content position. Default: "left" */
  position?: {
    /** Default: "left". */
    desktop?: "left" | "right";
    /** Default: "top". */
    mobile?: "top" | "bottom";
  };
  /** The row gap between the text content and the image, specified per breakpoint in pixels. */
  rowGap?: number;
}
