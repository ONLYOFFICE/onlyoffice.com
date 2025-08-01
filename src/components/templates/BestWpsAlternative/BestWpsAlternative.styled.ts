import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledBestWpsAlternativeTemplate = styled.div`
  margin-top: -72px;
  overflow: hidden;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

export { StyledBestWpsAlternativeTemplate };