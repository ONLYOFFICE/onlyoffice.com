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

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
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

const StyledSegmentsWrapper = styled.div`
  scroll-margin-top: 72px;

  @media ${device.mobile} {
    scroll-margin-top: 48px;
  }
`;

const StyledTextWrapper = styled.div`
  font-size: 14px;
  line-height: 1.5em;
  margin-bottom: 16px;

  &.error {
    color: #cb0000;
  }
`;

const StyledChecboxesWrapper = styled.div`
  background-color: #F5F5F5;
  float: left;
  padding: 24px;

  label {
    display: inline-flex;
    float: left;
    margin-bottom: 24px;
    width: 50%;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media ${device.mobile} {
    margin-left: -16px;
    margin-right: -16px;
    padding: 16px;
    width: 100vw;

    label {
      margin-bottom: 16px;
      width: 100%;
    }
  }
`;

const StyledPreTextAreaText = styled(Text)`
  font-size: 14px;
  line-height: 1.5em;
  margin-bottom: -16px;

  @media ${device.mobile} {
    font-size: 13px;
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
  StyledSegmentsWrapper,
  StyledTextWrapper,
  StyledChecboxesWrapper,
  StyledPreTextAreaText,
  StyledHeroHCaptchaWrapper,
};