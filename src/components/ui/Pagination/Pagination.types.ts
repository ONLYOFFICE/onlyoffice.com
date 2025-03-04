export interface IPageButton {
  /** Determines if the button is currently selected */
  active: boolean;
}

export interface IPagination {
  /** Total number of pages */
  totalPages: number;
  /** Currently selected page */
  currentPage: number;
  /** Function to handle page change */
  onPageChange: (page: number) => void;
}
