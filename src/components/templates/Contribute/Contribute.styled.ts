import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledContributeWrapper = styled.div`
  margin-top: -72px;
  padding-top: 72px;
  overflow: hidden;

  @media ${device.tablet} {
    margin-top: -64px;
    padding-top: 64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    padding-top: 48px;
  }
`;

export { StyledContributeWrapper };
