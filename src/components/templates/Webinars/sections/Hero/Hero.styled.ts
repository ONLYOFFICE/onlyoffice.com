import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledWebinarsSection = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/webinars/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: 50% 80%;

  @media ${device.tablet} {
    margin-top: -64px;
    background-size: 80% auto;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-size: 90% auto;
  }
`;

const StyledWebinarsHeading = styled(Heading)`
  margin-top: 60px;

  @media ${device.tablet} {
    font-size: 36px;
  }

  @media ${device.tabletS} {
    margin-top: 40px;
  }

  @media ${device.mobile} {
    margin-top: 60px;
    font-size: 24px;
  }
`;

const StyledWebinarsText = styled(Text)`
  margin-top: 24px;
  padding-bottom: 493px;

  @media ${device.tablet} {
    padding-bottom: 47vw;
  }

  @media ${device.mobile} {
    padding-bottom: 78vw;
  }
`;

export {
  StyledWebinarsSection,
  StyledWebinarsHeading,
  StyledWebinarsText,
};