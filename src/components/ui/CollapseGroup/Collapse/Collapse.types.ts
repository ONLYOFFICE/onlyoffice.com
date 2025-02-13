export interface ICollapse {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The label text to display for the collapse item. */
  label: string;
  /** The content to be displayed inside the collapse. */
  children: React.ReactNode;
  /** Indicates whether a divider should be shown between collapse items. Default: false. */
  divider?: boolean;
  /** If true, the collapse content is expanded, otherwise collapsed. Default: false. */
  isOpen?: boolean;
  /** Callback function triggered on click. */
  onClick?: () => void;
}
