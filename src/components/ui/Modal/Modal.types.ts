export interface IModal {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Content to be rendered inside the modal. */
  children: React.ReactNode;
  /** The maximum width of the modal. Default: "736px". */
  maxWidth?: string;
  /** The background color of the modal. Default: "rgba(0, 0, 0, 0.4)". */
  bgColor?: string;
  /** Whether to show the close icon inside the modal. */
  withCloseBtn?: boolean;
  /** Specifies whether the close button is positioned inside or outside the modal. */
  positionCloseBtn?: "inside" | "outside";
  /** Controls whether the modal is open or closed. */
  isOpen: boolean;
  /** Callback function triggered when the modal is requested to close. */
  onClose: () => void;
}
