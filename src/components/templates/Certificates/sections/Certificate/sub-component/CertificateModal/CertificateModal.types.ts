export interface ICertificate {
  /** Whether the modal is open or not */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** Certificate image */
  image: {
    /** Certificate image url */
    url: string;
    /** Certificate image height */
    height: number;
  };
}
