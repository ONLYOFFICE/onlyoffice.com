import Link from "next/link";
import { ArrowButton, PaginationList, PageButton } from "./Pagination.styled";
import { IPagination } from "./Pagination.types";
import { ChevronLeftIcon, ChevronRightIcon } from "@src/components/icons";

const Pagination = ({ totalPages, currentPage }: IPagination) => {
  const pagesPerBlock = 7;
  const startPage =
    currentPage > 0
      ? Math.floor((currentPage - 1) / pagesPerBlock) * pagesPerBlock + 1
      : 1;
  const endPage = Math.min(startPage + pagesPerBlock - 1, totalPages);
  const hasPrevious = startPage > 1;
  const hasNext = endPage < totalPages;

  return (
    <PaginationList>
      {hasPrevious && (
        <ArrowButton href={`?page=${startPage - 1}`} passHref>
          <ChevronLeftIcon />
        </ArrowButton>
      )}

      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      ).map((page) => (
        <Link key={page} href={`?page=${page}`} passHref>
          <PageButton active={page === currentPage}>{page}</PageButton>
        </Link>
      ))}

      {hasNext && (
        <ArrowButton href={`?page=${endPage + 1}`} passHref>
          <ChevronRightIcon />
        </ArrowButton>
      )}
    </PaginationList>
  );
};

export { Pagination };
