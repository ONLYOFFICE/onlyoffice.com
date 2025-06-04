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
  /** The width on Desktop Small. Default: "calc(33% - 19px)" */
  widthDesktopSmall?: string;
  /** The width on Tablet. */
  widthTablet?: string;
  /** The width on Tablet Small. */
  widthTabletSmall?: string;
  /** The width on Mobile. Default: "238px" */
  widthMobile?: string;
  /** The width on Mobile Small. */
  widthMobileSmall?: string;
  icon: {
    /** The icon url. */
    iconUrl: string;
    /** The block of icon height on Desktop. Default: "160px" */
    iconBlockHeightDesktop?: string;
    /** The block of icon height on Tablet. */
    iconBlockHeightTablet?: string;
    /** The block of icon height on Tablet Small. Default: "98px" */
    iconBlockHeightTabletSmall?: string;
    /** The block of icon height on Mobile. */
    iconBlockHeightMobile?: string;
    /** The block of icon height on Mobile Small. */
    iconBlockHeightMobileSmall?: string;
    /** The icon width on Desktop. Default: "72px" */
    iconWidthDesktop?: string;
    /** The icon height on Desktop. Default: "72px" */
    iconHeightDesktop?: string;
    /** The icon width on Tablet. */
    iconWidthTablet?: string;
    /** The icon height on Tablet. */
    iconHeightTablet?: string;
    /** The icon width on Tablet Small. Default: "43px" */
    iconWidthTabletSmall?: string;
    /** The icon height on Tablet Small. Default: "43px" */
    iconHeightTabletSmall?: string;
    /** The icon width on Mobile. */
    iconWidthMobile?: string;
    /** The icon height on Mobile. */
    iconHeightMobile?: string;
    /** The icon width on Mobile Small. */
    iconWidthMobileSmall?: string;
    /** The icon height on Mobile Small. */
    iconHeightMobileSmall?: string;
  };
}

export type { ICardLink };
