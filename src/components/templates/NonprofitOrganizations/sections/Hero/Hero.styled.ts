import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHeroWrapperBg = styled.div`
  background-color: #F5F5F5;
  background-image: url("/images/templates/nonprofit-organizations/hero/hero-bg.svg");
  background-position: calc(50% + 200px) 50px;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    background-position: 40vw 70px;
    background-size: 600px auto;
  }

  @media ${device.tabletS} {
    background-position: center calc(100% - 50px);
    background-size: 400px auto;
  }

  @media ${device.mobile} {
    background-size: 250px auto;
  }
`;

const StyledHeroHeading = styled(Heading)`
  max-width: 350px;
  margin-bottom: 32px;

  @media ${device.tabletS} {
    max-width: 100%;
    font-size: 40px;
    text-align: center;
  }

  @media ${device.mobile} {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

const StyledHeroText = styled(Text)`
  width: 20vw;
  margin-bottom: 32px;

  @media ${device.tablet} {
    width: 33vw;
  }

  @media ${device.tabletS} {
    width: 100%;
    text-align: center;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledHeroButtonWrapper = styled.div`
  @media ${device.tabletS} {
    text-align: center;
  }
`;

export {
  StyledHeroWrapperBg,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroButtonWrapper
};
