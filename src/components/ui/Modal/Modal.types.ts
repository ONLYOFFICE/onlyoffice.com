export interface IModal {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Content to be rendered inside the modal. */
  children: React.ReactNode;
  /** The maximum width of the modal. Default: "736px". */
  maxWidth?: string;
  /** Whether to show the close icon inside the modal. */
  showCloseIcon?: boolean;
  /** Controls whether the modal is open or closed. */
  isOpen: boolean;
  /** Callback function triggered when the modal is requested to close. */
  onClose: () => void;
}
