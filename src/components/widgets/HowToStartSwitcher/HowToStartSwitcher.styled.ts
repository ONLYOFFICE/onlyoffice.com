import styled from "styled-components";
import { Tabs } from "../Tabs/Tabs";
import { device } from "@src/utils/device";

export const StyledHowToStartSwitcher = styled(Tabs)`
  padding: 0;
  > div:not(:first-child) {
      padding: 96px 0 0;

      @media ${device.tabletS} {
        padding: 56px 0 0;
      }

      @media ${device.mobile} {
        padding: 32px 0 0;
      }
    }
`;
