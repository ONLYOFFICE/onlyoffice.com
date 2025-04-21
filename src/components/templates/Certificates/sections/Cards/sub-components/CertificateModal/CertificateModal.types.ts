export interface ICertificateModal {
  /** Whether the modal is open or not */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** Certificate image */
  image: {
    url: string;
    alt: string;
  };
}
