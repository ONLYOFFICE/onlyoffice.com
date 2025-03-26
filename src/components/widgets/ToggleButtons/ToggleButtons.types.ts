export interface IToggleButtons {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Array of items. */
  items: {
    /** Unique identifier for the item. */
    id: string;
    /** Display label for the item. */
    label: string;
  }[];
  /** The currently selected item. */
  selected: string;
  /** Function to call when an item is selected. */
  onChange: (value: string) => void;
}
