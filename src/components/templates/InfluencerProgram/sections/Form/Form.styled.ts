import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledFormWrapper = styled.div`
  max-width: 544px;
  margin: 40px auto 0;

  @media ${device.mobile} {
    margin-top: 32px;
  }
`;

const StyledForm = styled.div`
  width: 100%;
  display: grid;
  gap: 32px;
  margin-top: 24px;
`;

const StyledTextareWrapper = styled.div`
  display: grid;
  gap: 8px;

  > div {
    width: 100%;
    height: 120px;
  }
`;

const StyledHCaptchaWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;

  @media ${device.mobile} {
    grid-template-columns: initial;
  }
`;

const StyledFormStatusText = styled(Text)<{
  $isError?: boolean;
  $isDisabled?: boolean;
}>`
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${({ $isError }) => ($isError ? "#CB0000" : "#333333")};
  display: ${({ $isDisabled }) => ($isDisabled ? "block" : "none")};

  @media ${device.mobile} {
    margin-top: 12px;
    font-size: 12px;
  }
`;

export {
  StyledFormWrapper,
  StyledForm,
  StyledTextareWrapper,
  StyledHCaptchaWrapper,
  StyledFormStatusText,
};
