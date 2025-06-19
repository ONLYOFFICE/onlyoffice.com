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