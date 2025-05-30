export interface ITabs<T extends string> {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Array of tab items, each containing an `id`, `label`, and `content`. */
  items: {
    /** Unique identifier for the tab. */
    id: string;
    /** Label displayed in the tab. */
    label: string;
    /** Content rendered when the tab is active. */
    content: React.ReactNode;
  }[];
  /** Currently selected tab ID. */
  selected: string;
  /** Determines whether the tab content can be collapsed. */
  collapsible?: boolean;
  /** Background color for the tab container. */
  bgColor?: string;
  /** Callback function triggered when a tab is selected. */
  onChange: (value: T) => void;
}
