import styled from "styled-components";
import { Button } from "@src/components/ui/Button";

const StyledJobHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledJobSelectorsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledJobSelector = styled.div``;

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
  StyledJobSelectorButton,
  StyledJobList,
}