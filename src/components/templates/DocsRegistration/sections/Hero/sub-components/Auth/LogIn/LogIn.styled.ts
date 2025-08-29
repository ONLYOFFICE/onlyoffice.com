import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";

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

const StyledLogInAccountLink = styled(Button)`
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
  row-gap: 36px;
  margin-bottom: 36px;
`;

const StyledLogInForm = styled.div`
  display: grid;
  row-gap: 36px;
`;


export {
  StyledLogInAccount,
  StyledLogInAccountLink,
  StyledLogInWrapper,
  StyledLogInHeading,
  StyledLogInContainer,
  StyledLogInForm,
};
