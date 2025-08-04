import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 40px;
`;

const StyledHeroText = styled(Text)`
  margin-bottom: 40px;
`;

const StyledHeroForm = styled.form`
  max-width: 544px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledHeroSelectWrapper = styled.div`
  height: 56px;
  position: relative;
`;

const StyledHeroSelect = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  border: 1px solid #AAAAAA;
  border-radius: 3px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border: 1px solid #666666;
  }
`;

const StyledHeroOptions = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  border: 1px solid #666666;
  border-radius: 3px;
  padding: 8px 0;
  width: 100%;
  max-height: 200px;
  background-color: #ffffff;
  overflow: hidden;
  overflow-y: auto;
  z-index: 3;
`;

const StyledSelectOption = styled.button<{
  $isSelected?: boolean;
}>`
  position: relative;
  display: block;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: ${({ $isSelected }) => $isSelected && 600};
  line-height: 24px;
  color: ${({ $isSelected }) => ($isSelected ? "#ff6f3d" : "#444444")};
  width: 100%;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export {
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroForm,
  StyledHeroSelectWrapper,
  StyledHeroSelect,
  StyledHeroOptions,
  StyledSelectOption,
};
