import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHeading = styled(Heading)`
  max-width: 544px;
  font-size: 48px;
  line-height: 1.33;

  @media ${device.tablet} {
    font-size: 44px;
    margin: 0 auto;
    text-align: center;
  }
  @media ${device.mobile} {
    font-size: 30px;
  }
`;

const StyledSubtitle = styled(Text)`
  max-width: 500px;
  font-size: 18px;
  line-height: 1.6;
  margin: 24px 0 32px;

  @media ${device.tablet} {
    margin: 24px auto;
    text-align: center;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StyledButton = styled.div`
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`;

const StyledSection = styled(Section)`
  background-image: url("/images/templates/mobile-projects/hero/bg.svg");
  background-position-x: calc(50% + 350px);
  background-color: #f1f1f1;
  background-repeat: no-repeat;
  background-position-y: 73px;
  background-size: 737px 553px;
  margin-top: -72px;

  @media ${device.desktop} {
    background-position-y: 50%;
    background-size: 50vw auto;
  }

  @media ${device.tablet} {
    background-position: 50% calc(100% - 64px);
    background-size: 737px 553px;
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    background-size: auto 65vw;
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position: 50% calc(100% - 32px);
  }
`;

export { StyledHeading, StyledSubtitle, StyledButton, StyledSection };
