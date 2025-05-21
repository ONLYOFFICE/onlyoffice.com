import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledDocspaceRegistration = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
`;

const StyledDocspaceRegistrationWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const StyledDocspaceRegistrationCreate = styled.div`
  background: #D9F4FF;
  padding: 40px 88px 88px 0px;
  width: 50%;
  
  @media ${device.tablet} {
    width: 100%;
    padding: 40px 16px 48px;
  }
`;

const StyledDocspaceRegistrationForm = styled.div`
  width: 50%;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  padding: 40px 16px 112px 32px;
  
  @media ${device.tablet} {
    width: 100%;
    padding: 40px 16px 48px;
  }
`;

export {
  StyledDocspaceRegistration,
  StyledDocspaceRegistrationWrapper,
  StyledDocspaceRegistrationCreate,
  StyledDocspaceRegistrationForm
};
