import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHowToStart = styled(Section)`
  border-top: 1px solid #e2e2e2;
  scroll-margin-top: 72px;

  h2 {
    margin-bottom: 72px;

    @media ${device.tabletS} {
      margin-bottom: 56px;
    }

    @media ${device.mobile} {
      margin-bottom: 32px;
    }
  }

  @media ${device.tablet} {
    scroll-margin-top: 64px;
  }

  @media ${device.tabletS} {
    scroll-margin-top: 48px;
  }
`;
const StyledHowToStartInfo = styled.div`
  display: grid;
  row-gap: 72px;
  margin-top: 72px;

  @media ${device.tabletS} {
    row-gap: 40px;
    margin-top: 40px;
  }

  @media ${device.mobile} {
    row-gap: 32px;
    margin-top: 32px;
  }
`;

export { StyledHowToStart, StyledHowToStartInfo };
