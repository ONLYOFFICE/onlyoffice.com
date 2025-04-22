import styled from "styled-components";
import { device } from "@src/utils/device";
import ReCAPTCHA from "react-google-recaptcha";

const StyledQuoteModal = styled.div`
  display: grid;
  row-gap: 32px;
  border-radius: 5px;
  padding: 72px 96px 80px;
  background-color: #ffffff;

  @media ${device.tablet} {
    row-gap: 24px;
    padding: 48px 24px 56px;
  }
`;

const StyledQuoteModalGetItNow = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;

  @media ${device.mobile} {
    grid-template-columns: initial;
  }
`;

const StyledQuoteModalRecaptcha = styled(ReCAPTCHA)`
  @media ${device.mobile} {
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export {
  StyledQuoteModal,
  StyledQuoteModalGetItNow,
  StyledQuoteModalRecaptcha,
};
