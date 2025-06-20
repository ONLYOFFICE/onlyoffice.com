import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";

const StyledJobHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 28px;
    margin-bottom: 16px;
  }
`;

const StyledJobSelectorsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    width: 100%;
    justify-content: space-between;
  }
`;

const StyledJobSelector = styled.div`
  position: relative;
`;

const StyledJobSelectorOptions = styled.ul<{
  $isOpen: boolean;
}>`
  background-color: #fff;
  position: absolute;
  top: 50px;
  left: 0;
  padding: 8px 0;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  border-radius: 3px;
  z-index: 2;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition-duration: 300ms;
`;

const StyledJobSelectorOption = styled.li<{
  $isActive: boolean;
}>`
  color: ${({ $isActive }) => ($isActive ? "#FF6F3D" : "#444444")};
  background-color: ${({ $isActive }) => ($isActive ? "#F5F5F5" : "#fff")};
  padding: 16px 32px 16px 50px;
  font-size: 16px;
  line-height: 1.4em;
  white-space: nowrap;
  cursor: pointer;
  transition-duration: 300ms;

  &:hover {
    color: #FF6F3D;
    background-color: #F5F5F5;
  }
`;

const StyledJobSelectorButton = styled(Button)`
  padding: 12px 32px 12px 16px;
  background-color: transparent;
  position: relative;

  &::after {
    content: "";
    width: 16px;
    height: 100%;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-image: url("/images/icons/chevron-down.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

const StyledJobList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export {
  StyledJobHeadingWrapper,
  StyledJobSelectorsWrapper,
  StyledJobSelector,
  StyledJobSelectorOptions,
  StyledJobSelectorOption,
  StyledJobSelectorButton,
  StyledJobList,
}