import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroSection = styled(Section)`
  background-image: url(${getAssetUrl('/images/templates/conversion-api/hero/bg.svg')});
  background-repeat: no-repeat;
  background-position: calc(50% + 327px) -488px;
  background-repeat: no-repeat;
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 476px auto;
  gap: 24px;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    gap: 64px;
    text-align: center;
  }

  @media ${device.mobile} {
    gap: 50px;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  gap: 24px;
  justify-items: start;

  @media ${device.tabletS} {
    justify-items: center;
  }

  @media ${device.tabletS} {
    gap: 16px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  font-size: 48px;
  line-height: 53px;
  letter-spacing: -0.03em;

  @media ${device.tabletS} {
    font-size: 44px;
    line-height: 59px;
    letter-spacing: -0.02em;
  }

  @media ${device.mobile} {
    font-size: 28px;
    line-height: 32.5px;
  }
`;

const StyledHeroText = styled(Text)`
  font-size: 22px;
  line-height: 33px;

  @media ${device.tabletS} {
    font-size: 20px;
    line-height: 30px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledHeroImage = styled.img`
  max-width: 100%;

  @media ${device.tabletS} {
    max-width: 621px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  @media ${device.mobile} {
    margin: 0 -16px;
    width: calc(100% + 32px);
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
};
