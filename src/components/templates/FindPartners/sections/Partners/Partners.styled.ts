import styled from "styled-components";
import { Text } from "@src/components/ui/Text";

const StyledPartnersKeyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-bottom: 32px;
`;

const StyledPartnersKeyItem = styled.li``;

const StyledPartnersCountryWrapper = styled.div`
  width: 454px;
  margin: 0 auto;
`;

const StyledPartnersCountrySelect = styled.div`
  height: 60px;
  background-color: #F9F9F9;
  border: 1px solid #AAAAAA;
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 300ms;
  margin-bottom: 24px;

  &:hover {
    border-color: #666666;
  }
`;

const StyledPartnersCountryInner = styled.div<{
  $isSelectOpen: boolean;
}>`
  height: 100%;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 0;
    background-image: url("/images/icons/chevron-down.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transition-duration: 300ms;
    transform: translateY(-50%) ${({$isSelectOpen}) => $isSelectOpen ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const StyledPartnersCountryText = styled(Text)<{
  $isSelectOpen: boolean;
}>`
  &:first-child {
    position: absolute;
    top: 50%;
    left: 0;
    transition-duration: 300ms;
    transform: translate(0, -50%);

    ${({$isSelectOpen}) => $isSelectOpen && `
      transform: translate(-25%, -125%) scale(0.8);
    `}
  }

  &:last-child {
    position: absolute;
    top: 50%;
    left: 0;
    transition-duration: 300ms;
    opacity: ${({$isSelectOpen}) => $isSelectOpen ? 1 : 0};
    visibility: ${({$isSelectOpen}) => $isSelectOpen ? "visible" : "hidden"};
    transform: translateY(-50%);
  }
`;

const StyledPartnersCountryOptions = styled.ul<{
  $isSelectOpen: boolean;
}>`
  max-height: 200px;
  background-color: #FFFFFF;
  visibility: ${({$isSelectOpen}) => $isSelectOpen ? "visible" : "hidden"};
  opacity: ${({$isSelectOpen}) => $isSelectOpen ? 1 : 0};
  transition-duration: 300ms;
`;

const StyledPartnersCountryOption = styled.li`
  padding: 8px 16px;
  transition-duration: 300ms;
  cursor: pointer;

  &:hover {
    background-color: #F9F9F9;
  }
`;

export {
  StyledPartnersKeyList,
  StyledPartnersKeyItem,
  StyledPartnersCountryWrapper,
  StyledPartnersCountrySelect,
  StyledPartnersCountryInner,
  StyledPartnersCountryText,
  StyledPartnersCountryOptions,
  StyledPartnersCountryOption,
};