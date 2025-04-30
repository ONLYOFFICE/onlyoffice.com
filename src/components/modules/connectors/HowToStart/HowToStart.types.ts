export interface IHowToStartItem {
  /** The heading for the block item. */
  text: React.ReactNode;
  /** The links for the heading. */
  textLinks?: {
    /** The URL of the link. */
    url: string;
    /** Whether the link is external. */
    isExternal?: boolean;
  }[];
}

export interface IHowToStart {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The heading for the block. */
  heading: string;
  /** The items to display in the block. */
  items: IHowToStartItem[];
  /** The text for the block. */
  text?: React.ReactNode;
  /** The maximum width (in pixels) for the text content area. Default: 448 */
  contentWidth?: number;
  /** The image configuration. */
  image: {
    /** The image URL for the block. */
    url: string;
    /** The width of the image. */
    width?: number;
    /** The height of the image. */
    height?: number;
  };
}
