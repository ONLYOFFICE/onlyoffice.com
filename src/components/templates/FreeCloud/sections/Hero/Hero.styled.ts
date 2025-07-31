import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

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
  StyledHeroFormPortalWrapper,
  StyledHeroFormPortalText
};