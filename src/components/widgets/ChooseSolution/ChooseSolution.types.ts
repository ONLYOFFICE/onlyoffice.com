import { ISolutionCard } from "@src/components/widgets/SolutionCard";

export interface IChooseSolution {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The items. */
  items?: ISolutionCard[];
  /** The large items. */
  largeItems?: ISolutionCard[];
}
