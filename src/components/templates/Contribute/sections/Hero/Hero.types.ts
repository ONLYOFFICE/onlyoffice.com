export interface IHeroImage {
  /** The hero image */
  image: {
    /** The URL of the image */
    url?: string;
    /** The type of the image. Default: "image" */
    type?: "image" | "icon";
    /** The position-x of the icon. */
    positionX?: string;
    /** The visibility of the image. Default: true */
    isVisible?: boolean;
  };
  /** The top position of the image. */
  top?: string;
  /** The left position of the image. */
  left?: string;
  /** The right position of the image. */
  right?: string;
  /** The link of the image. */
  link?: string;
  /** The animation delay of the image.  */
  animationDelay?: string;
  /** The isRandom of the image. Default: false */
  isRandom?: boolean;
}
