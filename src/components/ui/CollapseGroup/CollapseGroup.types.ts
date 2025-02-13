export interface ICollapseGroup {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** An array of collapse items. */
  items: { label: string; content: React.ReactNode }[];
  /** In this mode, the collapse works like an accordion: if you open a block, the block that was open before is closed. Only one block can be open. Default: false. */
  isAccordion?: boolean;
  /** Indicates whether a divider should be shown between collapse items. Default: false. */
  divider?: boolean;
}
