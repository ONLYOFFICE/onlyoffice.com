import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { ConnectorHowToStart } from "@src/components/modules/connectors/HowToStart";

const StyledHowToStart = styled(Section)`
  scroll-margin-top: 72px;
  
  @media ${device.tablet} {
    scroll-margin-top: 64px;
  }

  @media ${device.tabletS} {
    scroll-margin-top: 48px;
  }
`;

const StyledConnectorHowToStart = styled(ConnectorHowToStart)`
  @media ${device.tabletS} {
    gap: 48px;
    grid-template-columns: 1fr;

   > div:empty {
      height: 470px;
    }
  }

  @media ${device.mobile} {
    gap: 32px;
    > div:empty {
      height: 235px;
    }
  }
`;

export { StyledHowToStart, StyledConnectorHowToStart };