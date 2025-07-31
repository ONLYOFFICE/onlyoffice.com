import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 56px 32px;

  @media ${device.desktop} {
    grid-template-columns: initial;
    gap: 16px;
  }
`;

export { StyledCards };
