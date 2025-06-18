import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHeroSection = styled(Section)`
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
    font-size: 30px;
    margin-bottom: 16px;
  }
`;

const StyledHeroText = styled(Text)`
  font-size: 22px;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroHeading,
  StyledHeroText,
};