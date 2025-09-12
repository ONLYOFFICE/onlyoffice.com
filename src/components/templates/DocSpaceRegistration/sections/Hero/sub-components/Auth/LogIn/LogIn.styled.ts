import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";

import { getAssetUrl } from "@utils/getAssetUrl";
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
  row-gap: 32px;
  margin-bottom: 32px;
`;

const StyledLogInSocialButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

const StyledLogInSocialButton = styled(Button)<{
  $google?: boolean;
  $zoom?: boolean;
  $x?: boolean;
  $linkedin?: boolean;
}>`
  position: relative;
  padding: 15px 8px;

  &::after {
    content: "";
    display: block;
    width: ${(props) => (props.$zoom ? "20px" : "24px")};
    height: ${(props) => (props.$zoom ? "20px" : "24px")};
    background-image: url(${getAssetUrl('/images/templates/docspace-registration/hero/social-icons.svg')});
    background-repeat: no-repeat;
    background-position-x: ${(props) =>
      props.$zoom
        ? "-36px"
        : props.$x
          ? "-68px"
          : props.$linkedin
            ? "-104px"
            : null};
    background-position-y: center;
  }
`;

const StyledLogInLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-top: 1px solid #e2e2e2;
    margin: 0 8px;
  }
`;

const StyledLogInForm = styled.div`
  display: grid;
  row-gap: 36px;
`;

const StyledLogInInputWrapper = styled.div`
  display: grid;
  row-gap: 12px;
  width: 100%;
`;

const StyledLogInForgotPasswordButton = styled.button`
  justify-self: start;
  border: none;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  color: #ff6f3d;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    justify-self: initial;
  }
`;

export {
  StyledLogInAccount,
  StyledLogInAccountLink,
  StyledLogInWrapper,
  StyledLogInHeading,
  StyledLogInContainer,
  StyledLogInSocialButtons,
  StyledLogInSocialButton,
  StyledLogInLabel,
  StyledLogInForm,
  StyledLogInInputWrapper,
  StyledLogInForgotPasswordButton,
};
