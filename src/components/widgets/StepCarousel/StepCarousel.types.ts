export interface IStepCarouselItem {
  /** The image URL for the carousel item. */
  imgUrl: string;
  /** The heading for the carousel item. */
  heading: React.ReactNode;
}

export interface IStepCarousel {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The items to display in the carousel. */
  items: IStepCarouselItem[];
}
