import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

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
  `;

const StyledHeroText = styled(Text)`
  max-width: 762px;
  margin: 0 auto 40px;
`;

const StyledHeroButton = styled(Button)`
  display: block;
  margin: 0 auto;

  @media ${device.mobile} {
    width: fit-content;
  }
`;

export { StyledHeroSection, StyledHeroHeading, StyledHeroText, StyledHeroButton }