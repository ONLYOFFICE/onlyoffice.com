import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const StyledLogInAccount = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 64px;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }

  @media ${device.tabletS} {
    margin-bottom: 64px;
  }

  @media ${device.mobile} {
    margin-bottom: 48px;
  }
`;

const StyledLogInAccountLink = styled(Link)`
  margin-left: 16px;
`;

const StyledLogInWrapper = styled.div`
  width: 100%;
  max-width: 472px;

  @media ${device.tabletS} {
    margin: 0 auto;
  }
`;

const StyledLogInHeading = styled(Heading)`
  margin-bottom: 32px;
`;

const StyledLogInContainer = styled.div`
  display: grid;
  margin-bottom: 36px;
`;

const StyledLogInForm = styled.div`
  display: grid;
margin-bottom: 36px;
  row-gap: 36px;
`;

const StyledSignUpCaption = styled.div<{ $error?: boolean }>`
  margin-top: 16px;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => (props.$error ? "#cb0000" : "#999999")};

  &.mailerror {
    margin-bottom: -14px;
  }

  &.success {
    color: #333333;
    font-size: 14px;
    line-height: 1.6em;
    text-align: center;
  }

  &.wrongcaptcha {
    margin: -32px 0 16px;
  }

  @media ${device.mobile} {
    font-size: 11px;
  }
`;


export {
  StyledLogInAccount,
  StyledLogInAccountLink,
  StyledLogInWrapper,
  StyledLogInHeading,
  StyledLogInContainer,
  StyledLogInForm,
  StyledSignUpCaption,
};
