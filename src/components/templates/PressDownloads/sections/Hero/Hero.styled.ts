import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHeroWrapper = styled.div`
  display: grid;
  gap: 24px;

  @media ${device.tabletS} {
    gap: 16px;
  }
`;

export { StyledHeroWrapper };
