import styled from "styled-components";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledCanceledFormWrapper = styled.div`
  max-width: 544px;
  margin: 0 auto;
`;

const StyledCanceledFormText = styled(Text)`
  margin-bottom: 24px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledCanceledFormCheckboxWrapper = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 48px;

  @media ${device.mobile} {
    gap: 16px;
    margin-bottom: 40px;
  }
`;

const StyledCanceledFormTextarea = styled.div`
  margin: 24px 0 32px;

  @media ${device.mobile} {
    margin: 16px 0;
  }
`;

const StyledCanceledHCaptchaWrapper = styled.div`
  display: grid;
  grid-template-columns: 302px auto;
  gap: 18px;
  align-items: center;
  margin: 32px 0;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 16px 0;
  }
`;

export {
  StyledCanceledFormWrapper,
  StyledCanceledFormText,
  StyledCanceledFormCheckboxWrapper,
  StyledCanceledFormTextarea,
  StyledCanceledHCaptchaWrapper,
};
