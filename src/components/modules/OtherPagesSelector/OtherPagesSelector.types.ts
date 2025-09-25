export interface IPage {
  id: string;
  name: string;
  url: string;
}

export interface IOtherPagesSelector {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Whether to show images. */
  withImage?: boolean;
  /** Whether to show title. */
  withTitle?: boolean;
  /** Page. */
  page: "editors" | "rooms" | "collaboration";
}
