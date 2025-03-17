export interface IStepCarouselItem {
  /** The image URL for the carousel item. */
  imgUrl: string;
  /** The heading for the carousel item. */
  heading: React.ReactNode;
  /** The links for the heading. */
  headingLinks?: {
    /** The URL of the link. */
    url: string;
    /** Whether the link is external. */
    isExternal?: boolean;
  }[];
}

export interface IStepCarousel {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The items to display in the carousel. */
  items: IStepCarouselItem[];
}
