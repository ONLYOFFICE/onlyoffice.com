export interface ICounterSelector {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Array of items. */
  items: {
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
