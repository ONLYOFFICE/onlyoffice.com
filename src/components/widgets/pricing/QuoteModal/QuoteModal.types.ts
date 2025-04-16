export interface IQuoteModal {
  locale: string;
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  byClickedText: React.ReactNode;
  buttonLabel: string;
}
