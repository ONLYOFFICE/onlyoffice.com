export interface IDemoPreviewModal {
  /** Whether the modal is open or not */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** Heading of the modal */
  heading: string;
  /** Content of the modal */
  content: React.ReactNode;
}
