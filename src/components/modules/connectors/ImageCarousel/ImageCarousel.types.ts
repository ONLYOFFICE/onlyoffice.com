export interface IImageCarouselItem {
  /** The image path. */
  image: {
    url: string;
    url2x?: string;
  };
}

export interface IImageCarousel {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The items to display in the carousel. */
  items: IImageCarouselItem[];
  /** The width of the image. Default: 960. */
  imageWidth?: number;
  /** The height of the image. Default: 532. */
  imageHeight?: number;
}
