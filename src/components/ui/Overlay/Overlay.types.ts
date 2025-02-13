export interface IOverlay {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Whether the overlay is active. */
  active?: boolean;
  /** Callback function that is called when the overlay is clicked. */
  onClick?: () => void;
}
