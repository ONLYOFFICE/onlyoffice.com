export interface ICounterSelector {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The variant. */
  variant?: "default" | "input";
  /** The size of the counter selector. Default: "medium". */
  size?: "small" | "medium";
  /** Background color. */
  bgColor?: string;
  /** Automatically focuses the counter selector when the component mounts. */
  autoFocus?: boolean;
  /** Controlled value of the counter selector. */
  value?: string;
  /** Array of items. */
  items?: {
    /** Unique identifier of the item. */
    id: string;
    /** Display label of the item. */
    label: string;
  }[];
  /** Currently selected item ID */
  selected?: string;
  /** Function to call when an item is selected. */
  onChange?: (value: string) => void;
}
