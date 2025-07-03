import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledCardsFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledCardsFilterSelect = styled.div`
  position: relative;
  padding-right: 32px;
  cursor: pointer;
`;

const StyledCardsRefineHeading = styled(Heading)<{
  $isOpen: boolean;
}>`
  &::after {
    content: "";
    width: 24px;
    height: 100%;
    background-image: url("/images/icons/chevron-down.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    top: 50%;
    right: 0;
    transform: ${({ $isOpen }) => ($isOpen ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)")};
    transition-duration: 300ms;
  }
`;

const StyledCardsRefineList = styled.ul<{
  $isOpen: boolean;
}>`
  min-width: 220px;
  padding-top: 14px;
  position: absolute;
  top: 50px;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition-duration: 300ms;
`;

const StyledCardsRefineText = styled(Text)<{
  $isActive: boolean;
}>`
  color: ${({ $isActive }) => ($isActive ? "#ff6f3d" : "#333333")};
  transition-duration: 300ms;
`;

const StyledCardsRefineItems = styled.li<{
  $isActive: boolean;
}>`
  padding: 16px;
  background-color: ${({ $isActive }) => ($isActive ? "#f5f5f5" : "#fff")};
  transition-duration: 300ms;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &:hover ${StyledCardsRefineText} {
    color: #ff6f3d;
  }
`;


const StyledCardsSortSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledCardsSortModules = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & ${StyledCardsRefineHeading} {
    font-weight: 400;
    padding-right: 32px;
  }
`;

const StyledCardsSortModuleText = styled(Text)`
  padding-right: 8px;
`;

const StyledCardsSortDate = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & ${StyledCardsRefineHeading} {
    font-weight: 400;
    padding-right: 32px;
  }

  & ${StyledCardsRefineList} {
    left: auto;
    right: 0;
  }
`;

const StyledCardsSortDateText = styled(Text)`
  padding-right: 8px;
`;

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
  StyledCardsRefineHeading,
  StyledCardsRefineList,
  StyledCardsRefineItems,
  StyledCardsRefineText,
  StyledCardsSortSelect,
  StyledCardsSortModules,
  StyledCardsSortModuleText,
  StyledCardsSortDate,
  StyledCardsSortDateText,
  StyledCardsContent,
  StyledCardsHeading,
  StyledCardsList
}