import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/collaboration-rooms/hero/bg.svg");
  background-position: calc(50% - 70px) -564px;
  background-repeat: no-repeat;
  background-color: #f9f9f9;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: 43% -564px;
  }

  @media ${device.mobile} {
    background-position: calc(50% - 266px) -564px;
  }
`;

export { StyledHero };
