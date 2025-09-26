import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { TPortalNameErrorStatus } from "../../FreeCloud.types";

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 56px;
`;

const StyledHeroFormWrapper = styled.div`
  max-width: 736px;
  padding: 56px 96px 88px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  text-align: center;

  @media ${device.tabletS} {
    padding: 56px 32px 32px;
  }

  @media ${device.mobile} {
    padding: 48px 12px 40px;
  }
`;

const StyledHeroStep = styled(Heading)`
  margin-bottom: 24px;
`;

const StyledHeroStepNumber = styled(Text)`
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  vertical-align: bottom;
  opacity: 0.2;
  position: relative;
  left: 10px;
`;

const StyledHeroStepText = styled(Text)`
  margin-bottom: 16px;
`;

const StyledHeroStepSubText = styled(Text)`
  margin-bottom: 56px;
`;

const StyledHeroStepSecond = styled(Text)`
  margin-bottom: 24px;
`;

const StyledHeroForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  text-align: left;

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledHeroFormNameWrapper = styled.div`
  display: flex;
  column-gap: 20px;

  @media ${device.mobile} {
    flex-direction: column;
    row-gap: 24px;
  }
`;

const StyledHeroFormPortalWrapper = styled.div`
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
  }
`;

const StyledHeroFormPortalText = styled(Text)`
  font-size: 14px;
  white-space: nowrap;
  padding-top: 18px;

  @media ${device.mobile} {
    font-size: 13px;
    padding-top: 12px;
  }

  @media ${device.mobileS} {
    padding-top: 0;
  }
`;

const StyledHeroFormPortalInputWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

const StyledHeroFormPortalError = styled.div<{
  $display: TPortalNameErrorStatus;
}>`
  display: ${props => props.$display === "default" ? "none" : "block"};
  width: 100%;
  padding: 14px;
  background: #fff;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  border-radius: 5px;
  font-size: 13px;
  line-height: 160%;
  text-align: center;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  &::before {
    content: '';
    display: block;
    background: #FFFFFF;
    box-shadow: -1px -1px 4px -4px #000000;
    -webkit-box-shadow: -1px -1px 4px -4px #000000;
    height: 16px;
    transform: rotate(45deg);
    width: 16px;
    left: 50%;
    position: absolute;
    top: -8px;
  }
`;

const StyledHeroFormPortalErrorText = styled(Text)`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export {
  StyledHeroHeading,
  StyledHeroFormWrapper,
  StyledHeroStep,
  StyledHeroStepNumber,
  StyledHeroStepText,
  StyledHeroStepSubText,
  StyledHeroStepSecond,
  StyledHeroForm,
  StyledHeroFormNameWrapper,
  StyledHeroFormPortalInputWrapper,
  StyledHeroFormPortalWrapper,
  StyledHeroFormPortalError,
  StyledHeroFormPortalErrorText,
  StyledHeroFormPortalText
};