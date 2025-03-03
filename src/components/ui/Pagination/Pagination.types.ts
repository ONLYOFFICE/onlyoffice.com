export interface IPageButtonProps {
    /** Determines if the button is currently selected */
    active: boolean;
}

export interface IArrowButtonProps{
    /** Determines the direction of the arrow */
    arrow: "prev" | "next";
}

export interface IPaginationProps {
    /** Total number of pages */ 
    totalPages: number;
    /** Currently selected page */ 
    currentPage: number;
    /** Function to handle page change */ 
    onPageChange: (page: number) => void; 
}