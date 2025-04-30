import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHowToStart = styled(Section)`
  background-color: #ffffff;
  border-top: 1px solid #e2e2e2;
  scroll-margin-top: 72px;

  @media ${device.tablet} {
    scroll-margin-top: 64px;
  }

  @media ${device.tabletS} {
    scroll-margin-top: 48px;
  }
`;

export { StyledHowToStart };
