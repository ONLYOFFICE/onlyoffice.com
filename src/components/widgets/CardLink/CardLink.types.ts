interface ICardLink {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The link href (all item on link) */
  href: string;
  /** Heading */
  title: string;
  /** Text */
  text: string;
  /** Text align */
  textAlign?: "left" | "center" | "right";
  /** Subtitle. Have link-hover effect */
  subtitle?: string;
  /** The width on Desktop. Default: "352px" */
  widthDesktop?: string;
  /** The width on Desktop Small. Default: "29.33vw" */
  widthDesktopSmall?: string;
  /** The width on Tablet Small. Default: "208px" */
  widthTabletSmall?: string;
  /** The width on Mobile. Default: "238px" */
  widthMobile?: string;
  icon: {
    /** The icon url. */
    iconUrl: string;
    /** The block of icon height on Desktop. Default: "160px" */
    iconBlockHeightDesktop?: string;
    /** The block of icon height on Tablet Small. Default: "98px" */
    iconBlockHeightTabletSmall?: string;
    /** The icon width on Desktop. Default: "72px" */
    iconWidthDesktop?: string;
    /** The icon height on Desktop. Default: "72px" */
    iconHeightDesktop?: string;
    /** The icon width on Tablet Small. Default: "43px" */
    iconWidthTabletSmall?: string;
    /** The icon height on Tablet Small. Default: "43px" */
    iconHeightTabletSmall?: string;
  };
}

export type { ICardLink };
