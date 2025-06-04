import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledPartnersKeyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-bottom: 32px;
`;

const StyledPartnersKeyItem = styled.li`
  & > button {
    padding: 8px 7.9px;
    font-size: 16px;
    line-height: 22px;
    border: 1px solid #ebebeb;

    &:first-child {
      text-transform: none;
    }
  }
`;

const StyledPartnersCountryWrapper = styled.div`
  width: 454px;
  margin: 0 auto;
  position: relative;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const StyledPartnersCountrySelect = styled.div<{
  $isSelectOpen: boolean;
}>`
  height: 60px;
  background-color: #F9F9F9;
  border: ${({$isSelectOpen}) => $isSelectOpen ? "1px solid #666666" : "1px solid #AAAAAA"};
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 300ms;
  margin-bottom: 48px;

  @media ${device.mobile} {
    height: 50px;
  }

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
  $isSelectCountry: string;
}>`
  &:first-child {
    position: absolute;
    top: 50%;
    left: 0;
    transition-duration: 300ms;
    transform: translate(0, -50%);

    ${({$isSelectOpen, $isSelectCountry}) => ($isSelectOpen || $isSelectCountry) &&
      css`
        transform: translate(-25%, -125%) scale(0.8);
        opacity: 0.5;
      `
    }
  }

  &:last-child {
    position: absolute;
    top: 50%;
    left: 0;
    transition-duration: 300ms;
    opacity: ${({$isSelectOpen, $isSelectCountry}) => ($isSelectOpen || $isSelectCountry) ? 1 : 0};
    visibility: ${({$isSelectOpen, $isSelectCountry}) => ($isSelectOpen || $isSelectCountry) ? "visible" : "hidden"};
    transform: translateY(-50%);
  }
`;

const StyledPartnersCountryOptions = styled.ul<{
  $isSelectOpen: boolean;
}>`
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
  background-color: #FFFFFF;
  border: 1px solid #666666;
  border-radius: 4px;
  visibility: ${({$isSelectOpen}) => $isSelectOpen ? "visible" : "hidden"};
  opacity: ${({$isSelectOpen}) => $isSelectOpen ? 1 : 0};
  transition-duration: 300ms;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 3;
`;

const StyledPartnersCountryOption = styled.li`
  padding: 8px 16px;
  transition-duration: 300ms;
  cursor: pointer;

  &:hover {
    background-color: #F9F9F9;
  }
`;

const StyledPartnersCardList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
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
  StyledPartnersCardList,
};