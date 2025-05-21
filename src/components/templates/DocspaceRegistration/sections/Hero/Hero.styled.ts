import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHero = styled(Section)`
  background-color: #f5f5f5;
`;

const StyledHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledHeroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 24px;
  position: absolute;
  left: 0;
  top: 0;
  
  @media ${device.tabletS} {
    position: relative;
    margin-bottom: 16px;
  }
`;

const StyledBackButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/images/templates/docspace-registration/back-icon.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 8px;
`;

const StyledBackButtonText = styled.span`
  font-size: 14px;
  color: #333;
`;

const StyledHeroLogo = styled.div`
  width: 200px;
  height: 48px;
  background-image: url("/images/templates/docspace-registration/docspace-logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0 auto 32px;
  
  @media ${device.mobile} {
    width: 160px;
    height: 40px;
    margin-bottom: 24px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 24px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledHeroText = styled(Text)`
  margin-bottom: 30px;

  @media ${device.tabletS} {
    margin-bottom: 24px;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroLogo,
  StyledBackButton,
  StyledBackButtonIcon,
  StyledBackButtonText
};
