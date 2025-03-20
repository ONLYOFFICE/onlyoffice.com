import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/virtual-data-rooms/hero/bg.svg");
  background-position: 37% -630px;
  background-repeat: no-repeat;
  background-color: #f9f9f9;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: 26% -564px;
  }

  @media ${device.mobile} {
    background-position: 24% -690px;
  }
`;

export { StyledHero };
