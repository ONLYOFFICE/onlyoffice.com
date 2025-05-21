import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";

const StyledRegistrationForm = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledRegistrationFormWrapper = styled.div`
  height: 100%;
  max-width: 472px;
  margin-right: auto;
  margin-left: 56px;
  margin-bottom: 0;
  
  @media ${device.tablet} {
    margin: 0 auto;
  }
`;

const StyledRegistrationFormContent = styled.div`
  width: 100%;
`;

const StyledAlreadyRegistered = styled.div`
  display: flex;
  margin-bottom: 24px;
  
  p {
    display: inline-block;
    font-size: 16px;
    line-height: 1.5em;
    padding: 0;
    margin: 0;
  }
  
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledSignInLink = styled.button`
  background: none;
  border: none;
  color: #ff6f3d;
  cursor: pointer;
  font-weight: 600;
  padding: 0;
  text-decoration: underline;
  display: inline-block;
  font-size: 16px;
  line-height: 1.5em;
  margin-left: 16px;
  
  &:hover {
    text-decoration: none;
  }
  
  @media ${device.mobile} {
    margin-left: 0;
    padding-top: 4px;
  }
`;

const StyledRegistrationFormContainer = styled.div`
  width: 100%;
  
  .deploy-info {
    padding: 4px 0 0;
    
    p {
      display: inline-block;
      font-size: 16px;
      line-height: 1.5em;
      padding: 0;
      margin: 0;
    }
    
    a {
      display: inline-block;
      font-size: 16px;
      line-height: 1.5em;
      color: #ff6f3d;
      text-decoration: underline;
      font-weight: 600;
      padding-top: 4px;
      
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const StyledProgressBar = styled.div`
  margin-bottom: 24px;
  
  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }
`;

const StyledProgressLine = styled.div`
  height: 4px;
  background-color: #e5e5e5;
  border-radius: 2px;
  overflow: hidden;
  
  .progress {
    width: 33.33%;
    height: 100%;
    background-color: #ff6f3d;
    transition: width 0.3s ease;
  }
`;

const StyledStepCounter = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const StyledRegistrationFormHeading = styled(Heading)`
  font-size: 24px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: 0;
  font-weight: 700;
  color: #333;
`;

const StyledRegistrationFormText = styled.p`
  color: #333333;
  font-size: 16px;
  line-height: 1.6em;
  padding: 16px 0 0;
  text-align: left;
  margin: 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: auto;
  text-align: left;
  margin: 0 0 32px;
`;

const StyledFormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const StyledFormLabel = styled.label`
  display: block;
  margin-top: 0;
  margin-bottom: 6px;
  font-size: 14px;
  color: #666666;
  line-height: 1.6em;
`;

const StyledSubmitButton = styled(Button)`
  margin-top: 16px;
  width: 100%;
  padding: 12px;
  background-color: #ff6f3d;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #e5633a;
  }
`;

const StyledShowPassword = styled.div`
  content: "";
  cursor: pointer;
  display: block;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 16px;
  transition: 0.3s;
  width: 24px;
  z-index: 20;
  
  svg > path {
    fill: #A3A9AE;
  }
  
  &:hover {
    svg > path {
      fill: #666666;
    }
  }
`;

export {
  StyledRegistrationForm,
  StyledRegistrationFormWrapper,
  StyledRegistrationFormContent,
  StyledRegistrationFormHeading,
  StyledRegistrationFormText,
  StyledRegistrationFormContainer,
  StyledForm,
  StyledFormGroup,
  StyledFormLabel,
  StyledSignInLink,
  StyledProgressBar,
  StyledProgressLine,
  StyledStepCounter,
  StyledSubmitButton,
  StyledAlreadyRegistered,
  StyledShowPassword
};
