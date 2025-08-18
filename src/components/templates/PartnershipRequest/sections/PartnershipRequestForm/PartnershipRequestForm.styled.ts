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

  &.firstHeard {
    margin-bottom: -16px;
  }

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
`;

const StyledPreRadiosText = styled(Text)`
  font-size: 14px;
  line-height: 1.5em;
  margin-bottom: -16px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledLine2RadiosWrapper = styled.div`
  background-color: #F9F9F9;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px;

  @media ${device.mobile} {
    row-gap: 8px;
  }
`;

const StyledLineRadioInput = styled.input`
  display: none;
`;

const StyledLineRadioLabel = styled.label`
  color: #666666;
  display: inline-block;
  font-size: 16px;
  line-height: 1.5em;
  padding-left: 36px;
  position: relative;
  flex-basis: 30%;
  flex-shrink: 1;
  flex-grow: 0;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 14px;
  }

  &::before {
    content: "";
    position: absolute;;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #AAAAAA;
    background: #f9f9f9;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 9px;
    transform: translateY(-50%) scale(0);
    width: 8px;
    height: 8px;
    background: #FFFFFF;
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  ${StyledLineRadioInput}:checked + & {
    &::before {
      border: 1px solid #8BB825;
      background: #8BB825;
    }

    &::after {
      transform: translateY(-50%) scale(1);
    }
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
  StyledPreRadiosText,
  StyledLine2RadiosWrapper,
  StyledLineRadioInput,
  StyledLineRadioLabel,
  StyledHeroHCaptchaWrapper,
};
