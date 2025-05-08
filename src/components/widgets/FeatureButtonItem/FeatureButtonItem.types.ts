export interface IFeatureButtonItem {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Maximum width of the component on Desktop. Default: "544px" */
  desktopMaxWidth?: string;
  /** Maximum width of the component on Tablet. Default: "328px"  */
  tabletMaxWidth?: string;
  /** Maximum width of the component on Tablet. Default: "328px"  */
  tabletSmallMaxWidth?: string;
  /** Maximum width of the component on Mobile. Default: "328px" */
  mobileMaxWidth?: string;
  /** Maximum width of the component on Mobile. Default: "288px" */
  mobileSmallMaxWidth?: string;
  icon: {
    /** The icon url. */
    url: string;
    /** The icon width. Default: "64px" */
    width?: string;
    /** The icon height. Default: "64px" */
    height?: string;
    /** The icon width on Mobile. */
    mobileWidth?: string;
    /** The icon height on Mobile. */
    mobileHeight?: string;
  };
  /** The heading. */
  heading?: React.ReactNode;
  /** The text */
  text?: React.ReactNode;
  /** The button */
  button?: React.ReactNode;
  /** The color of Heading and Text*/
  color?: string;
  /** The position all of the content */
  position?: "center" | "left" | "right";
}
