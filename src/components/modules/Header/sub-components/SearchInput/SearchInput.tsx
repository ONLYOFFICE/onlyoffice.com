import { StyledSearchInput, StyledSearchButton } from "./SearchInput.styled";
import { SearchIcon } from "@src/components/icons";

const SearchInput = () => {
  return (
    <StyledSearchInput id="search-input">
      <StyledSearchButton>
        <SearchIcon />
      </StyledSearchButton>
    </StyledSearchInput>
  );
};

export { SearchInput };
