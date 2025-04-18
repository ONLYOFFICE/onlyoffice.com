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
    label: {
      /** Content to display on the left side of the label. */
      leftSide?: React.ReactNode;
      /** The main label text that will be displayed in the middle. */
      name: React.ReactNode;
      /** Content to display on the right side of the label. */
      rightSide?: React.ReactNode;
    };
  }[];
  /** The currently selected item. */
  selected?: string;
  /** Function to call when an item is selected. */
  onChange?: (value: string) => void;
}
