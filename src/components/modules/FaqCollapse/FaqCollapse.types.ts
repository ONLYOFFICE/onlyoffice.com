import { ISection } from "@src/components/ui/Section";

export interface IFaqCollapse {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The background color. */
  background?: string;
  /** The text. */
  text?: string;
  /** An array of collapse items. */
  items: { label: string; content: React.ReactNode }[];
  /** In this mode, the collapse works like an accordion: if you open a block, the block that was open before is closed. Only one block can be open. Default: false. */
  isAccordion?: boolean;
  /** Top and bottom spacing value for desktop screens. Default: ["112px", "112px"]. */
  desktopSpacing?: ISection["desktopSpacing"];
  /** Top and bottom spacing value for tablet screens. Default: ["88px", "88px"]. */
  tabletSpacing?: ISection["tabletSpacing"];
  /** Top and bottom spacing value for tablet small screens. */
  tabletSmallSpacing?: ISection["tabletSmallSpacing"];
  /** Top and bottom spacing value for mobile screens. Default: ["48px", "48px"]. */
  mobileSpacing?: ISection["mobileSpacing"];
}
