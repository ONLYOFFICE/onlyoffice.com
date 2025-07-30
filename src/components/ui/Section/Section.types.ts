export interface ISection {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Content to be rendered inside. */
  children?: React.ReactNode;
  /** HTML element to be rendered. Default: "section". */
  as?: string;
  /** Background color. */
  background?: string;
  /** Top and bottom spacing value for desktop screens. Default: ["112px", "112px"]. */
  desktopSpacing?: [string, string];
  /** Top and bottom spacing value for tablet screens. Default: ["88px", "88px"]. */
  tabletSpacing?: [string, string];
  /** Top and bottom spacing value for tablet small screens. Default: ["80px", "80px"]. */
  tabletSmallSpacing?: [string, string];
  /** Top and bottom spacing value for mobile screens. Default: ["48px", "48px"]. */
  mobileSpacing?: [string, string];
  borderTop?: boolean;
  borderTopColor?: string;
}
