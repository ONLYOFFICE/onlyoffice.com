import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";

const StyledCardsFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledCardsFilterSelect = styled.div``;

const StyledCardsSortSelect = styled.div``;

const StyledCardsSortModules = styled.div``;

const StyledCardsSortDate = styled.div``;

const StyledCardsContent = styled.div`
  margin-top: 56px;
`;

const StyledCardsHeading = styled(Heading)``;

const StyledCardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 48px;
`;

export {
  StyledCardsFiltersWrapper,
  StyledCardsFilterSelect,
  StyledCardsSortSelect,
  StyledCardsSortModules,
  StyledCardsSortDate,
  StyledCardsContent,
  StyledCardsHeading,
  StyledCardsList
}