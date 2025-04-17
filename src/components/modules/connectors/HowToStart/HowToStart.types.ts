export interface IHowToStartItem {
  /** The heading for the block item. */
  heading: React.ReactNode;
  /** The links for the heading. */
  headingLinks?: {
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
  /** The items to display in the block. */
  items: IHowToStartItem[];
  /** The header for the block. */
  header: string;  
  /** The text for the block. */
  text?: React.ReactNode;
  /** The image URL for the block. */
  imageUrl?: string;
  /** The height of the image. */
  imageHeight?: number;
}
