import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/public-rooms/hero/bg.svg");
  background-position: 37% -630px;
  background-repeat: no-repeat;
  background-color: #f9f9f9;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: 26% -564px;

    ul li:nth-child(5) {
      grid-column: span 2;
      justify-self: center;
      width: 50%;
    }
  }

  @media ${device.mobile} {
    background-position: 24% -690px;

    ul li:nth-child(5) {
      grid-column: unset;
      justify-self: unset;
      width: auto;
    }
  }
`;

export { StyledHero };
