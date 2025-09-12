export interface ISocialIcon {
  /** Social icon url */
  iconUrl?: string;
  /** Social icon position */
  iconPosition?: string;
  /** Social icon link */
  link?: string;
  /** Social icon title */
  title: string;
  /** Social icon for only one language */
  onlyFor?: string;
  /** Exclude social icon for specific language */
  excludeFor?: string;
}
