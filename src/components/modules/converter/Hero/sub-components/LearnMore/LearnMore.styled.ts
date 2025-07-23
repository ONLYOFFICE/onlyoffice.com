import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledLearnMoreBtnWrapper = styled.div`
  margin-top: 72px;
  text-align: center;

  @media ${device.mobile} {
    margin-top: 48px;
  }
`;

const StyledLearnMoreBtn = styled.button`
  border: none;
  font-size: 14px;
  line-height: 22px;
  color: #444444;
  background-color: transparent;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const StyledLearnMore = styled.div`
  border: 1px solid #e2e2e2;
  margin-top: 72px;
  padding: 24px;
  background-color: #ffffff;

  @media ${device.mobile} {
    margin-top: 48px;
  }
`;

const StyledLearnMoreTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StyledLearnMoreLabel = styled(Text)`
  padding: 8px 16px;
  background-color: #f9f9f9;
`;

const StyledLearnMoreCloseBtn = styled.button`
  border: none;
  margin-top: 8px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url("/images/icons/cross.svg");
  cursor: pointer;
`;

export {
  StyledLearnMoreBtnWrapper,
  StyledLearnMoreBtn,
  StyledLearnMore,
  StyledLearnMoreTop,
  StyledLearnMoreLabel,
  StyledLearnMoreCloseBtn,
};
