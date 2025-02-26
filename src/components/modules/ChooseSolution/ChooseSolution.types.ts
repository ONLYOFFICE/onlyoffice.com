import { ISolutionCard } from "@src/components/widgets/SolutionCard";
import { ISection } from "@src/components/ui/Section";

export interface IChooseSolution {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The heading. */
  heading?: string;
  /** The items. */
  items?: ISolutionCard[];
  /** The large items. */
  largeItems?: ISolutionCard[];
  /** Top and bottom spacing value for desktop screens. Default: ["112px", "112px"]. */
  desktopSpacing?: ISection["desktopSpacing"];
  /** Top and bottom spacing value for tablet screens. Default: ["88px", "88px"]. */
  tabletSpacing?: ISection["tabletSpacing"];
  /** Top and bottom spacing value for tablet small screens. */
  tabletSmallSpacing?: ISection["tabletSmallSpacing"];
  /** Top and bottom spacing value for mobile screens. Default: ["48px", "48px"]. */
  mobileSpacing?: ISection["mobileSpacing"];
}
