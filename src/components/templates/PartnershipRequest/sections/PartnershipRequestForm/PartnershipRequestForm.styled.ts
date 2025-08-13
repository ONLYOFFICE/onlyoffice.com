import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledPRForm = styled.form`
  margin: 0 auto;
  max-width: 544px;

  @media ${device.tablet} {
  }
`;

const StyledDownloadModalWrapper = styled.div`
  display: grid;
  row-gap: 32px;

  @media ${device.tablet} {
    row-gap: 24px;
  }
`;

const StyledNameWrapper = styled.div`
  display: grid;
  column-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

const StyledPRFHeading = styled(Heading)`
  margin-top: 24px;
`;

const StyledDownloadModalText = styled(Text)`
  margin-top: 16px;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const StyledHeroHCaptchaWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export {
  StyledPRForm,
  StyledDownloadModalWrapper,
  StyledNameWrapper,
  StyledPRFHeading,
  StyledDownloadModalText,
  StyledHeroHCaptchaWrapper,
};
