import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";

const StyledHero = styled(Section)`
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 24px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledHeroText = styled(Text)`
  margin-bottom: 40px;
  font-size: 22px;
  line-height: 33px;

  @media ${device.mobile} {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 24px;
  }
`;

const StyledHeroPlans = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  margin-bottom: 96px;

  @media ${device.tablet} {
    grid-template-columns: initial;
    row-gap: 16px;
    margin: 0 auto 64px;
    max-width: 300px;
  }

  @media ${device.mobile} {
    margin-bottom: 48px;
  }
`;

const StyledHeroFeaturesHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

export {
  StyledHero,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroPlans,
  StyledHeroFeaturesHeading,
};
