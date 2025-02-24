import { useTranslation } from "next-i18next";
import {
  StyledSortByNameFilter,
  StyledSortByNameFilterText,
  StyledSortByNameFilterButton,
} from "./SortByNameFilter.styled";

type TSortOrder = "A-Z" | "Z-A";

interface ISortByNameFilter {
  onSort: (order: TSortOrder) => void;
  sortOrder: TSortOrder;
}

const SortByNameFilter = ({ onSort, sortOrder }: ISortByNameFilter) => {
  const { t } = useTranslation("all-connectors");

  return (
    <StyledSortByNameFilter>
      <StyledSortByNameFilterText>{t("SortByName")}</StyledSortByNameFilterText>

      <StyledSortByNameFilterButton
        onClick={() => onSort("A-Z")}
        $active={sortOrder === "A-Z"}
      >
        A-Z
      </StyledSortByNameFilterButton>
      <StyledSortByNameFilterButton
        onClick={() => onSort("Z-A")}
        $active={sortOrder === "Z-A"}
      >
        Z-A
      </StyledSortByNameFilterButton>
    </StyledSortByNameFilter>
  );
};

export { SortByNameFilter };
