import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledCounterSelectorWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 140px;
  align-items: center;
  column-gap: 8px;

  @media ${device.mobile} {
    grid-template-columns: initial;
    row-gap: 8px;
    text-align: center;
  }
`;

export { StyledCounterSelectorWrapper };
