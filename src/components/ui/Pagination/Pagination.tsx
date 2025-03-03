import { ArrowButton, PaginationList, PageButton } from "./Pagination.styled";
import { IPaginationProps } from "./Pagination.types";

const Pagination: React.FC<IPaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const pagesPerBlock = 7; 
  const startPage = currentPage > 0 ? Math.floor((currentPage - 1) / pagesPerBlock) * pagesPerBlock + 1 : 1;
  const endPage = Math.min(startPage + pagesPerBlock - 1, totalPages);
  const hasPrevious = startPage > 1;
  const hasNext = endPage < totalPages;

  return (
    <PaginationList>
      {hasPrevious && <ArrowButton arrow={"prev"} onClick={() => onPageChange(startPage - 1)}></ArrowButton>}

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
        <PageButton key={page} active={page === currentPage} onClick={() => onPageChange(page)}>
          {page}
        </PageButton>
      ))}

      {hasNext && <ArrowButton arrow={"next"} onClick={() => onPageChange(endPage + 1)}></ArrowButton>}
    </PaginationList>
  );
};

export { Pagination };



